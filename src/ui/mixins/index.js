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
      const memoized = memoize(handleNestedItems)
      return memoized(attrs, injections);
    },
    cleanFromNestedListeners(listeners, injections, emit) {
      const memoized = memoize(cleanFromNestedListeners)
      return memoized(listeners, injections, emit)
    },
    keepNestedComponentAttrs(attrs, injections) {
      const memoized = memoize(handleNestedItems)
      return memoized(attrs, injections, "keep");
    },
    getClass(overrideClass, staticClass, dataClass, tailwindClass) {
      const memoized = memoize(getClass)
      return memoized(overrideClass, staticClass, dataClass, tailwindClass)
    },
    filterNestedComponentClasses(attrs, name) {
      const memoized = memoize(filterNestedComponentClasses)
      return memoized(attrs, name)

    },
    getNestedComponentClasses(attrs, name, tailwindClass) {
      const memoizedOne = memoize(filterNestedComponentClasses)
      const classes = memoizedOne(attrs, name)
      const memoizedTwo = memoize(getClass)
      return memoizedTwo(...classes, null, tailwindClass)
    },
    filterNestedComponentListeners(listeners, name) {
      const memoized = memoize(filterNestedComponentListeners)
      return memoized(listeners, name)
    },
    filterClassByNestedComponent(attrs, componentName, override = false) {
      const memoized = memoize(filterClassByNestedComponent)
      return memoized(attrs, componentName, override)
    },
    forwardAttrs(attrs, arr) {
      const memoized = memoize(forwardAttrs)
      return memoized(attrs, arr)
    },
    wrapper(fnName, args) {
      const memoized = memoize(this[fnName])
      return memoized(...args)
    },
  }
};
