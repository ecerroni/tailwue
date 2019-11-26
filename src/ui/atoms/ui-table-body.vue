i<template functional>
  <tbody
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'px-5 py-5 border-b border-gray-200 bg-white text-sm')"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [{
      ...listeners,
      // click: (e) => {
      //  if (e && listeners['click']) {
      //    e.preventDefault()
      //    e.stopPropagation()
      //    listeners['click']({ value: head, index })
      //  }
      //}
    }, injections])"
  >
    <slot />
  </tbody>
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
  inject: {
    components: {
      default: {
        //
      },
    },
  },
};
</script>
