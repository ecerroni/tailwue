<template functional>
  <span
    v-if="slots().default"
    class="flex items-center w-full"
  >
    <slot />
    <input
      v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
      :class="`pl-8 w-full ${$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline')}`"
      :value="props.value"
      v-on="$options.methods.wrapper('filterNestedComponentListeners', [listeners, 'input'])"
    >
  </span>
  <input
    v-else
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline')"
    :value="props.value"
    v-on="$options.methods.wrapper('filterNestedComponentListeners', [listeners, 'input'])"
  >
</template>
<script>
import uiMixin from '../mixins';

export default {
  mixins: [uiMixin],
  props: {
    value: String,
    overrideClass: {
      type: String,
      default: '',
    },
  },
};
</script>
