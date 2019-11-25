import memoize from 'fast-memoize'
import { handleNestedItems } from './_handle'

export const cleanFromNestedListeners = (listeners, injections, emit) => {
  const memoized = memoize(handleNestedItems)
  let cleanListeners = memoized(listeners, injections);
  if (!emit || typeof emit !== "object" || Object.keys(emit).length < 1) {
    return cleanListeners;
  }
  cleanListeners = {
    ...cleanListeners,
    ...Object.entries(emit).reduce(
      // emit is the object that send spefici events outer parent
      (o, e) => ({
        ...o,
        ...(listeners[e[0]] && {
          [e[0]]: event => {
            if (event && listeners[e[0]]) {
              // event.preventDefault();
              // event.stopPropagation();
              event.payload = e[1];
              return listeners[e[0]](event);
            }
          }
        })
      }),
      {}
    )
  };
  return cleanListeners;
}