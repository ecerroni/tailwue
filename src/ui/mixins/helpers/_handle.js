import { getUiComponentName } from './_get'

export const handleNestedItems = (items, injections, keep = false) => {
  if (!items) return {};
  let atoms
  switch (!!injections) {
    case Array.isArray(injections) && injections.length:
      atoms = injections
      break;
    case typeof injections === 'string':
      atoms = [injections];
      break
    case typeof injections === 'object' && !!injections.components:
      atoms = Object.keys(injections.components)
    default:
      break;
  }
  if (!atoms) return items;
  const componentsNames = atoms.map(name =>
    getUiComponentName(name)
  );
  // if (items["ui-menu-li__cclass"]) {
  //   console.log(componentsNames, items);
  // }
  const filteredItems = Object.keys(items).reduce((obj, name) => {
    // name.includes("ui-menu") && console.log("NAME", name, items[name]);
    return {
      ...obj,
      ...((keep
        ? componentsNames.find(
          comp =>
            name.split("__")[0] === comp &&
            name !== "class" &&
            !name.toLowerCase().includes("v-model")
        )
        : !componentsNames.find(comp => name.includes(comp))) && {
          [keep
            ? name.split("__").length &&
              name.split("__")[1] &&
              name.split("__")[1].length
              ? name.split("__")[1]
              : name
            : name]: items[name]
        })
    };
  }, {});
  // console.log(`CLEAN { isKeep: ${!!keep}}`, filteredItems);
  return filteredItems;
};