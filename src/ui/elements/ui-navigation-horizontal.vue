<template functional>
    <nav
      :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'relative flex flex-wrap items-center justify-between md:py-4')"
      v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
      v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    >
      <slot name="logo" />
      <!-- <div class="relative z-10 flex-shrink-0 pl-4 py-4 md:p-0">
        <img class="h-8 w-8" src="/img/example-logo.svg" alt="" />
      </div> -->
      <!-- sub-atom -->
      <component :is="injections.components['UiNavigationToggleWrapper']">
        <div
        v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiNavigationToggleWrapper')"
        v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiNavigationToggleWrapper')"
        :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiNavigationToggleWrapper', 'flex-shrink-0 pr-4 md:hidden')"
        >
        <!-- sub-sub-atom -->
          <component :is="injections.components['UiNavigationToggleButton']">
            <button
              ref="openButton"
              @click="props.open"
              type="button"
              v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiNavigationToggleButton')"
              v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiNavigationToggleButton')"
              :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiNavigationToggleButton', 'flex-shrink-0')"
              aria-label="Menu"
            >
              <slot name="toggle-icon">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                  />
                  <path
                    d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                  />
                  <path
                    d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
                  />
                </svg>
              </slot>
            </button>
          </component>
        </div>
      </component>
      <!-- sub-atom -->
      <component :is="injections.components['UiNavigationLinksWrapper']">
      <div
        v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiNavigationLinksWrapper')"
        v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiNavigationLinksWrapper')"
        :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiNavigationLinksWrapper', 'hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent')"          
      >        
        <component :is="injections.components['UiNavigationLinksBlock']">
          <div
            v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiNavigationLinksBlock')"
            v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiNavigationLinksBlock')"
            :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiNavigationLinksBlock', 'lg:absolute inset-0 flex items-center justify-center')"          
          >
            <component :is="injections.components['UiNavigationLinksItem']">
              <a
                v-for="link in props.links"
                :key="link.id || link"
                :href="link.value ? link.value : link.id ? `#${link.id}` : `#${link}`"
                v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiNavigationLinksItem')"
                v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiNavigationLinksItem')"
                :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiNavigationLinksItem', 'ml-10 text-sm font-medium text-gray-900 hover:text-gray-700')"          
              >
                {{link.label || link}}
              </a>
            </component>
            </div>
              <component :is="injections.components['UiNavigationLinksActions']">
                <div
                  v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiNavigationLinksItem')"
                  v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiNavigationLinksItem')"
                  :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiNavigationLinksItem', 'ml-10 relative flex items-baseline')"          
                >
                  <slot name="actions" />
                </div>
            </component>
          </component>
        </div>
      </component>
    </nav>
</template>
<script>
import uiMixin from '../mixins';
import UiInput from '../atoms/ui-input';
import UiButton from '../atoms/ui-button';

export default {
  inheritAttrs: false,
  props: {
    links: {
      type: [Array],
      default: () => []
    },
    overrideClass: {
      type: String,
      default: '',
    },
  },
  mixins: [uiMixin],
  methods: {
    //
  },
  inject: {
    components: {
      default: {
        UiNavigationToggle: {
          name: "UiNavigationToggleWrapper",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        },
        UiNavigationToggleButton: {
          name: "UiNavigationToggleButton",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        },
        UiNavigationLinksWrapper: {
          name: "UiNavigationLinksWrapper",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        },
        UiNavigationLinksBlock: {
          name: "UiNavigationLinksBlock",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        },
        UiNavigationLinksItem: {
          name: "UiNavigationLinksItem",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        },
        UiNavigationLinksActions: {
          name: "UiNavigationLinksActions",
          functional: true,
          render: (h, ctx) => ctx.slots().default
        },
      },
    },
  },
};
</script>
