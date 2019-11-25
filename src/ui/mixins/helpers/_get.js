export const getUiComponentName = name =>
  ["input", "click"].includes(name)
    ? name
    : name.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`).slice(1);

export const getClass = (overrideClass, staticClass, dataClass, tailwindClass) => {
  return overrideClass
    ? overrideClass
    : // it is a children of a standard component
    staticClass
      ? staticClass
        .trim()
        .replace(/\s\s+/g, " ")
        .split(" ")
        .reduce((str, cl) => {
          const modifier = cl.includes(":");
          const prefix = modifier
            ? `${cl.split(":")[0]}${cl.split(":")[1].split("-")[0]}`
            : cl.split("-")[0];
          return `${str
            .split(" ")
            .filter(cl => !cl.includes(prefix))
            .join(" ")} ${cl}`;
        }, tailwindClass)
      : // it is a children of a functional comoponent
      dataClass
        ? dataClass
          .trim()
          .replace(/\s\s+/g, " ")
          .split(" ")
          .reduce((str, cl) => {
            const modifier = cl.includes(":");
            const prefix = modifier
              ? `${cl.split(":")[0]}${cl.split(":")[1].split("-")[0]}`
              : cl.split("-")[0];
            return `${str
              .split(" ")
              .filter(cl => !cl.includes(prefix))
              .join(" ")} ${cl}`;
          }, tailwindClass)
        : tailwindClass;
}