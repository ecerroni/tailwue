<template functional>
  <tr
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
  >
    <td
      v-for="(td, index) in slots().default"
      :key="index"
      :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'px-5 py-5 border-b border-gray-200 bg-white text-sm')"
    >
      <component
        :is="injections.components['Vnodes']"
        :vnodes="td"
      />
    </td>
  </tr>
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
        Vnodes: {
          functional: true,
          render: (h, ctx) => ctx.props.vnodes,
        },
      },
    },
  },
};
</script>
