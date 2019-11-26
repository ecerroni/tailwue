import memoize from 'fast-memoize'
import {
  filterNestedComponentListeners,
  filterNestedComponentClasses,
  filterClassByNestedComponent,
  cleanFromNestedListeners,
  handleNestedItems,
  getClass,
  forwardAttrs,
} from './helpers'
import mStore from './store'
const cache = {
  create() {
    const store = mStore;
    return {
      has(key) { return (key in store); },
      get(key) { return store[key]; },
      set(key, value) { store[key] = value; }
    };
  }
}

export default {
  created() {
    this.props = {};
    this.listeners = {};
    this.attrs = {};
    this.data = {
      model: null
    };
    this.injections = {};
  },
  methods: {
    cleanFromNestedAttrs(attrs, injections) {
      const memoized = memoize(handleNestedItems, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      return memoized(attrs, injections);
    },
    cleanFromNestedListeners(listeners, injections, emit) {
      const memoized = memoize(cleanFromNestedListeners, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      return memoized(listeners, injections, emit)
    },
    keepNestedComponentAttrs(attrs, injections) {
      const memoized = memoize(handleNestedItems, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      return memoized(attrs, injections, "keep");
    },
    getClass(overrideClass, staticClass, dataClass, tailwindClass) {
      const memoized = memoize(getClass, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      return memoized(overrideClass, staticClass, dataClass, tailwindClass)
    },
    filterNestedComponentClasses(attrs, name) {
      const memoized = memoize(filterNestedComponentClasses, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      return memoized(attrs, name)

    },
    getNestedComponentClasses(attrs, name, tailwindClass) {
      const memoizedOne = memoize(filterNestedComponentClasses, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      const classes = memoizedOne(attrs, name)
      const memoizedTwo = memoize(getClass, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      return memoizedTwo(...classes, null, tailwindClass)
    },
    filterNestedComponentListeners(listeners, name) {
      const memoized = memoize(filterNestedComponentListeners, {
        strategy: memoize.strategies.variadic,
        // cache,
      })
      return memoized(listeners, name)
    },
    filterClassByNestedComponent(attrs, componentName, override = false) {
      const memoized = memoize(filterClassByNestedComponent, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      return memoized(attrs, componentName, override)
    },
    forwardAttrs(attrs, arr) {
      const memoized = memoize(forwardAttrs, {
        strategy: memoize.strategies.variadic,
        cache,
      })
      return memoized(attrs, arr)
    },
    wrapper(fnName, args) {
      return this[fnName](...args)
    },
  }
};
