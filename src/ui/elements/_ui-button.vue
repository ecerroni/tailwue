<template functional>
  <button
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded')"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
  >
    <slot>Button</slot>
    <component
      v-for="(c, name) in injections.components"
      :key="name"
      v-on="$options.methods.filterNestedComponentListeners(listeners, name)"
      :is="injections.components[name]"
      :overrideClass="$options.methods.filterClassByNestedComponent(data.attrs, name, 'override')"
      :class="$options.methods.filterClassByNestedComponent(data.attrs, name)"
    >
      <p
        v-on="Object.keys(listeners).reduce((o, key) => ({
          ...o, ...(key.includes('ui-another-slot') && { [key.split('-')[key.split('-').length - 1]]: listeners[key]})
          } ), {})"
      >UI Another slot</p>
    </component>
  </button>
</template>
<script>
import uiMixin from './mixins';
import UiAnother from './ui-another';
import UiThird from './ui-third';

export default {
  // inheritAttrs: false,
  props: {
    overrideClass: {
      type: String,
      default: '',
    },
  },
  mixins: [uiMixin],
  inject: {
    components: {
      default: {
        UiAnother,
        UiThird,
      },
    },
  },
};
</script>
