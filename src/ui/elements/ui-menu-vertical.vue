<template functional>
  <nav
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
    v-bind="{...$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])}"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'w-56 relative')"
  >
    <component :is="injections.components['UiMenuItemHighlight']">
      <span
        v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiMenuItemHighlight')"
        v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiMenuItemHighlight')"
        :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiMenuItemHighlight', `absolute h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium`)"
        :style="{ transform: `translateY(calc(100% * ${props.selected}))` }"
      />
    </component>
    <component :is="injections.components['UiMenuUl']">
      <ul
        v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiMenuUl')"
        v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiMenuUl')"
        :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiMenuUl', `relative`)"
      >
        <component :is="injections.components['UiMenuLi']">
          <li
            v-for="(link, index) in props.links"
            :key="index"
            v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiMenuLi')"
            v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiMenuLi')"
            :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiMenuLi', '')"
          >
            <component
              :linkItem="{
                    id: link.id || link,
                    label: link.label || link,
                    link: link.value || link,
                    index,
                  }"
              :selected="props.selected === index"
              v-bind="{...$options.methods.keepNestedComponentAttrs(data.attrs, 'UiMenuItem'), ...$options.methods.forwardAttrs(data.attrs, ['UiMenuItemLink'])}"
              v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiMenuItem')"
              :is="injections.components['UiMenuItem']"
            >
              <template #icon v-if="link.icon">{{link.icon}}</template>
              {{link.label || link}}
            </component>
          </li>
        </component>
      </ul>
    </component>
    <ul class="relative"></ul>
  </nav>
</template>
<script>
import uiMixin from "../mixins";
import UiMenuItem from "../atoms/ui-menu-item";

export default {
  inheritAttrs: false,
  props: {
    selected: {
      type: [String, Number],
      default: undefined
    },
    links: {
      type: [Array],
      default: () => []
    },
    overrideClass: {
      type: String,
      default: ""
    }
  },
  mixins: [uiMixin],
  methods: {
    //
  },
  inject: {
    components: {
      default: {
        UiMenuItem,
        UiMenuItemLink: {},
        UiMenuUl: {
          name: "UiMenuUl",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        },
        UiMenuLi: {
          name: "UiMenuLi",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        },
        UiMenuItemHighlight: {
          name: "UiMenuItemHighlight",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        }
      }
    }
  }
};
</script>
<style>
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-fastest {
  transition-duration: 75ms;
}
.transition-faster {
  transition-duration: 100ms;
}
.transition-fast {
  transition-duration: 150ms;
}
.transition-medium {
  transition-duration: 200ms;
}
.transition-slow {
  transition-duration: 300ms;
}
.transition-slower {
  transition-duration: 500ms;
}
.transition-slowest {
  transition-duration: 700ms;
}

.transition-all {
  transition-property: all;
}
.transition-opacity {
  transition-property: opacity;
}
.transition-transform {
  transition-property: transform;
}

.focus-visible.focus-visible\:underline {
  text-decoration: underline;
}
</style>
