import memoize from 'fast-memoize'
import { getUiComponentName } from './_get'
import { handleNestedItems } from './_handle'

export const forwardAttrs = (attrs, arr) => {
  const injections = arr.reduce(
    (obj, cl) => ({
      ...obj,
      components: {
        ...obj.components,
        [cl]: {}
      }
    }),
    {
      components: {}
    }
  );
  const memoized = memoize(handleNestedItems)
  const forwarded = memoized(attrs, injections, "keep");
  return arr.reduce(
    (obj, comp) => ({
      ...obj,
      ...Object.entries(forwarded).reduce(
        (o, entry) => ({
          ...o,
          [`${getUiComponentName(comp)}__${entry[0]}`]: entry[1]
        }),
        {}
      )
    }),
    {}
  );
}