import { getUiComponentName } from './_get'

export const filterNestedComponentClasses = (attrs, componentName) => {
  const name = getUiComponentName(componentName)
  if (!attrs) return "";
  const componentOverrideClass = attrs[
    `${name}__overrideClass`
  ]
    ? attrs[
    `${name}__overrideClass`
    ]
    : "";
  const componentClass = attrs[
    `${name}__class`
  ]
    ? attrs[
    `${name}__class`
    ]
    : "";
  return [componentOverrideClass, componentClass];
}

export const filterClassByNestedComponent = (attrs, componentName, override = false) => {
  if (!attrs) return "";
  const name = getUiComponentName(componentName)
  const componentClass = attrs[
    `${name}__${override ? "overrideClass" : "class"}`
  ]
    ? attrs[
    `${name}__${
    override ? "overrideClass" : "class"
    }`
    ]
    : "";
  // console.log(
  //   `[${name}] => CLASS | FILTERED { isOverride: ${!!override}}`,
  //   componentClass
  // );
  return componentClass;
}

export const filterNestedComponentListeners = (listeners, name) => {
  // console.log(
  //   "NAME",
  //   name,
  //   listeners,
  //   Object.keys(listeners).map(key => [
  //     key,
  //     getUiComponentName(name),
  //     key.split("__")[0] === getUiComponentName(name),
  //     key.includes(getUiComponentName(name)),
  //     key.split("__")[1],
  //     key.split("__")[1] ? key.split("__")[1] : key,
  //     key.split("_")[key.split("_").length - 1]
  //   ])
  // );
  const filtered = Object.keys(listeners).reduce(
    (o, key) => ({
      ...o,
      ...(key.split("__")[0] === getUiComponentName(name) && {
        [key.split("__")[1] ? key.split("__")[1] : key]:
          key === "input"
            ? e => {
              e.preventDefault();
              e.stopPropagation();
              return listeners[key](e.target.value);
            }
            : listeners[key]
      })
    }),
    {}
  );
  // console.log(`[${name}] => LISTENERS | FILTERED`, filtered);
  return filtered;
}