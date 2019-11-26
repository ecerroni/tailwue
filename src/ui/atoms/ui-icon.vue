<template>
  <svg
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'h-5 w-5 fill-current text-gray-500')"
    viewBox="0 0 24 24"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
  >
    <path
      d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
    />
  </svg>
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
