i<template functional>
  <thead>
    <tr v-if="props.headers && props.headers.length">
      <th
        v-for="(head, index) in props.headers"
        :key="head"
        v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"        
        :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider')"
        v-on="$options.methods.wrapper('cleanFromNestedListeners', [{
                                                                      ...listeners,
                                                                    }, injections,
                                                                    /* with the next obj param choose what event to override (click) and what to emit ({ value: head, index }) */
                                                                    { click: { value: head, index } }])"
      >
        {{ head }}
      </th>
    </tr>
    <tr v-else>
      <th
        v-for="row in slots().default"
        :key="row.name"
        v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
        :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider')"
        v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"        
      >
        <component
          :is="injections.components['Vnodes']"
          :vnodes="row"
        />
      </th>
    </tr>
  </thead>
</template>
<script>
import uiMixin from '../mixins';

export default {
  mixins: [uiMixin],
  props: {
    headers: {
      type: Array,
      default: () => {},
    },
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
