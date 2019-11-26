
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config.js'

const { theme: { colors = {} } = {} } = resolveConfig(tailwindConfig)


const buildColors = colors => {
  return Object.entries(colors).reduce((arr, entry) => {
    if (typeof entry[1] === 'string') {
      return [
        ...arr, entry[0]
      ]
    }
    return [
      ...arr,
      ...buildColors(entry[1]).map(c => `${entry[0]}-${c}`)
    ]
  }, [])
}

const sizes = {
  width: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 'full', 'screen', 'auto', 'px', ...[2, 3, 5, 5, 6, 12].reduce((arr, n) => [...arr, ...Array.from(Array(n).keys()).slice(1).map((num) => `${num}/${n}`)], [])],
  height: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 'full', 'screen', 'auto', 'px'],
  'max-width': ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', 'full'],
}

const tree = {
  // LAYOUT
  display: ['hidden', 'block', 'inline-block', 'flex', 'inline-flex', 'inline', 'table', 'table-row', 'table-cell'],
  visibility: ['visible', 'invisible'],
  float: ['float-left', 'float-right', 'float-none', 'clear-fix'],
  'object-fit': ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'],
  'object-position': ['object-bottom', 'object-center', 'object-left', 'object-left-bottom', 'object-left-top', 'object-right', 'object-right-bottom', 'object-right-top', 'object-top'],
  overflow: ['overflow-auto', 'overflow-x-auto', 'overflow-y-auto', 'overflow-hidden', 'overflow-x-hidden', 'overflow-y-hidden', 'overflow-visible', 'overflow-x-visible', 'overflow-y-visible', 'overflow-scroll', 'overflow-x-scroll', 'overflow-y-scroll'],
  position: ['static', 'sticky', 'fixed', 'absolute', 'relative'],
  'top-right-bottom-left': ['top-0', 'right-0', 'bottom-0', 'left-0', 'inset-auto', 'inset-y-auto', 'inset-x-auto', 'top-auto', 'right-auto', 'bottom-auto', 'left-auto'],
  'z-index': ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],

  // BACKGROUNDS
  'background-attachment': ['bg-fixed', 'bg-local', 'bg-scroll'],
  'background-color': buildColors(colors).map(c => `bg-${c}`),
  'background-position': ['bg-bottom', 'bg-center', 'bg-left', 'bg-left-bottom', 'bg-left-top', 'bg-right', 'bg-right-bottom', 'bg-right-top', 'bg-top'],
  'background-repeat': ['bg-repeat', 'bg-no-repeat', 'bg-repeat-x', 'bg-repeat-y', 'bg-repeat-round', 'bg-repeat-space'],
  'background-size': ['bg-auto', 'bg-cover', 'bg-contain'],

  // SIZING
  width: sizes.width.map(size => `w-${size}`),
  'max-width': sizes['max-width'].map(size => `max-w-${size}`),
  height: sizes.height.map(size => `h-${size}`),
  'min-widht': ['min-w-0', 'min-w-full'],
  'min-height': ['min-h-0', 'min-h-full', 'min-h-screen'],
  'max-height': ['max-h-full', 'max-h-sreen'],

  // FLEXBOX
  flex: ['flex-direction', 'justify-content'],
  'flex-direction': ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'],
  'justify-content': ['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around'],


  appearance: ['appearance-none'],
  'text-color': buildColors(colors).map(c => `text-${c}`),
}

const matches = {
  ...Object.entries(tree).reduce((obj, entry) => ({
    ...obj,
    ...(!!entry[1] && Array.isArray(entry[1]) && {
      ...entry[1].reduce((o, item) => ({
        ...o,
        [item]: `${entry[0]}`
      }), {})
    })
  }), {})
}

console.log(matches);

const sample = {
  old: 'flex justify-center invisible hover:visible hover:bg-blue-100 bg-black',
  new: 'block hover:bg-blue-700 visible hover:invisible bg-red-100'
}
const clean = (cl, oldClasses, modifier) => {
  // wrong class name or class is not a target for removal
  if (!matches[cl]) {
    console.log('WRONG CLASS', cl);
    return [oldClasses]
  }
  // check if it is a modifier, ex. hover:flex
  const isModifier = !!modifier
  console.log('[[]] isModifier', isModifier, cl, modifier);
  // if it has not array of children let's get the sibillings minus himself
  const key = matches[cl]
  if (!tree[cl]) {
    const filtered = isModifier ? tree[key].filter(it => oldClasses.includes(`${modifier}:${it}`)) : tree[key].filter(it => oldClasses.includes(it))
    console.log('REMOVE', cl, 'SIBILLINGS (by)', key, filtered);
    return filtered.length
      ? filtered.reduce((arr, item) => {
        const match = isModifier ? `${modifier}:${item}` : item
        console.log('MATCH', match);
        const isIncluded = oldClasses.includes(match);
        let stripped = oldClasses
        if (isIncluded) {
          console.log('>>>>>STRIP<<<<<');
          console.log('Strip', item, 'from', oldClasses);
          stripped = oldClasses.filter(oc => oc !== match)
          console.log('stripped', stripped)
          console.log('-----------------');
        }
        console.log(`tree['${item}']`, tree[item]);
        if (!tree[item]) {
          return [...arr, stripped]
        }
        console.log('STEP DOWN | ', item);
        return tree[item].reduce((a, i) => [...a, ...clean(i, stripped, modifier)], [])
      }, [])
      : [oldClasses] // no removals; return current classes
  }
  return tree[cl].reduce((a, i) => [...a, ...clean(i, oldClasses, modifier)], [])
}
const common = (current, next) => current.filter(item => next.includes(item))
const additional = (current, next) => next.filter(item => !current.includes(item))

const substitute = (newClass, oldClass) => {
  const items = {
    new: newClass.trim()
      .replace(/\s\s+/g, " ")
      .split(" "),
    old: oldClass.trim()
      .replace(/\s\s+/g, " ")
      .split(" ")
  }
  const newItems = Array.from(new Set(items.new.reduce((arr, cls) => {
    const classes = arr.length > 0 ? [...arr] : items.old
    console.log('START ======================ITERATION ===>>>>>');
    console.log('VALUE', cls);
    console.log('CLASSES', classes);
    let [modifier, item] = cls.split(':')
    const isModifier = !!item
    item = item ? item : modifier
    const isMatch = !!matches[item]
    const newAddition = isModifier ? `${modifier}:${item}` : item
    const newItem = isMatch
      ? [...clean(item, classes, isModifier && modifier).reduce((a, i) => [...a, ...i], []), newAddition]
      : [...clean(item, classes, isModifier & modifier).reduce((a, i) => [...a, ...i], [])]
    console.log('NEW ITEM', newItem);
    const commons = common(arr, newItem)
    const additionals = additional(arr, newItem)
    console.log('commons', commons);
    console.log('additionals', additionals);
    console.log('final', new Set([...commons, ...additionals]))
    return [...commons, ...additionals]
  }, [])))
  console.log('<<<=====================================   END');
  return newItems.join(' ')
}

const newItems = substitute(sample.new, sample.old)
console.log('SAMPLE OLD', sample.old);
console.log('SAMPLE NEW', sample.new);
console.log('CLASS RESULT ====>', `class="${newItems}"`)

export const getUiComponentName = name =>
  ["input", "click"].includes(name)
    ? name
    : name.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`).slice(1);

export const getClass = (overrideClass, staticClass, dataClass, tailwindClass) => {
  const merge = !!staticClass || !!dataClass
  const classes = {
    ...(merge) && {
      new: staticClass ? staticClass : dataClass
    },
    old: tailwindClass
  }
  if (!overrideClass && !merge) return tailwindClass
  return overrideClass
    ? overrideClass
    : substitute(classes.new, classes.old)
}