<template functional>
  <button
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded')"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
  >
    <slot>Button</slot>
  </button>
</template>
<script>
import uiMixin from '../mixins';

export default {
  mixins: [uiMixin],
  props: {
    overrideClass: {
      type: String,
      default: '',
    },
  },
};
</script>
