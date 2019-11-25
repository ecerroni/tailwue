<template functional>
  <table
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'min-w-full leading-normal')"
    :value="props.value"
  >
    <component
      v-if="props.headers && ! slots().tableHeader"
      :is="injections.components['UiTableHead']"
      :headers="props.headers"
      v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiTableHead')"
      v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiTableHead')"
    />
    <slot v-if="!props.header && slots().tableHeader" name="tableHeader"/>
    <component
      v-if="!slots().tableBody"
      :is="injections.components['UiTableBody']"
      v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiTableBody')"
      v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiTableBody')"
    >
      <slot/>
    </component>
    <slot v-if="slots().tableBody" name="tableBody"/>
  </table>
</template>
<script>
import uiMixin from '../mixins';
import UiTableHead from '../atoms/ui-table-head';
import UiTableBody from '../atoms/ui-table-body';

export default {
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
  mixins: [uiMixin],
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
