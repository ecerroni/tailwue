<template functional>
  <button
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, props.__atom.class)"
    type="button"
    :aria-selected="props.selected"
    class
    v-on="$options.methods.cleanFromNestedListeners(listeners, injections, { click: props.linkItem })"
  >
    <div :class="props.selected ? 'text-indigo-400' : 'text-gray-500'">
      <slot name="icon" />
    </div>
    <component :is="injections.components['UiMenuItemLink']">
      <div
        v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiMenuItemLink')"
        :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiMenuItemLink', `${props.selected ? 'text-indigo-600' : 'text-gray-700'} ${props.__atom.child.class}`)"
        v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiMenuItemLink')"
      >
        <slot>Link</slot>
      </div>
    </component>
  </button>
</template>
<script>
import uiMixin from '../mixins';
import uiAtom from '../classes/ui-menu-item'
import uiAtomChild from '../classes/ui-menu-item-link'

export default {
  inject: {
    components: {
      default: {
        UiMenuItemLink: {
          name: 'UiMenuItemLink',
          functional: true,
          render: (h, ctx) => ctx.slots().default,
        },
      },
    },
  },
  mixins: [uiMixin],
  props: {
    __atom: { // eslint-disable-line
      type: Object,
      default: () => {
        const atom = uiAtom
        atom.child = uiAtomChild
        return atom
      }
    },
    linkItem: {
      type: Object,
      default: () => ({
        link: '',
        id: '',
        label: '',
        index: undefined,
      }),
    },
    selected: {
      type: Boolean,
      default: false,
    },
    overrideClass: {
      type: String,
      default: '',
    },
  },
};
</script>
