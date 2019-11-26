<template functional>
  <table
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'min-w-full leading-normal')"
    :value="props.value"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
  >
    <component
      :is="injections.components['UiTableHead']"
      v-if="props.headers && ! slots().tableHeader"
      :headers="props.headers"
      v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiTableHead')"
      v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiTableHead')"
    />
    <slot
      v-if="!props.header && slots().tableHeader"
      name="tableHeader"
    />
    <component
      :is="injections.components['UiTableBody']"
      v-if="!slots().tableBody"
      v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiTableBody')"
      v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiTableBody')"
    >
      <slot />
    </component>
    <slot
      v-if="slots().tableBody"
      name="tableBody"
    />
  </table>
</template>
<script>
import uiMixin from '../mixins';
import UiTableHead from '../atoms/ui-table-head';
import UiTableBody from '../atoms/ui-table-body';

export default {
  mixins: [uiMixin],
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    overrideClass: {
      type: String,
      default: '',
    },
  },
  inject: {
    components: {
      default: {
        UiTableHead,
        UiTableBody,
      },
    },
  },
};
</script>
