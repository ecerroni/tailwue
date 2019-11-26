<template functional>
  <label
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'block text-gray-700 text-sm font-bold mb-2')"
    :value="props.value"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
  >
    <slot />
  </label>
</template>
<script>
import uiMixin from '../mixins';

export default {
  mixins: [uiMixin],
  props: {
    error: Boolean,
    value: String,
    overrideClass: {
      type: String,
      default: '',
    },
  },
};
</script>
