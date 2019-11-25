i<template functional>
  <tbody
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
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
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'px-5 py-5 border-b border-gray-200 bg-white text-sm')"
  >
    <slot/>
  </tbody>
</template>
<script>
import uiMixin from '../mixins';

export default {
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
        //
      },
    },
  },
};
</script>
