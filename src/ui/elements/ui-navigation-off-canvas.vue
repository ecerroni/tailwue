<template functional>
  <div 
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'md:hidden')"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
  >
    <!-- Off-canvas menu background overlay -->
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
      appear
    >
      <div
        v-show="props.isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="-1"
          @click="props.close"
        />
      </div>
    </transition>

    <!-- Off-canvas menu -->
    <transition
      enter-class="translate-x-full"
      enter-active-class="ease-out transition-slow"
      enter-to-class="translate-x-0"
      leave-class="translate-x-0"
      leave-active-class="ease-in transition-medium"
      leave-to-class="translate-x-full"
      appear
    >
      <div
        v-show="isOpen"
        class="z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white transition-transform overflow-y-auto"
      >
        <div class="relative z-10 bg-white">
          <div
            :class="isOpen ? 'block' : 'hidden'"
            class="absolute top-0 right-0 p-4"
          >
            <button
              ref="closeButton"
              type="button"
              class="text-gray-600 focus:outline-none focus:text-gray-900"
              aria-label="Close"
              @click="close"
            >
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z"
                />
              </svg>
            </button>
          </div>
          <div class="px-4 pt-4 pb-6">
            <slot name="logo" />?
            <a
              href="#"
              class="mt-8 block text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >Products</a>
            <a
              href="#"
              class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
            >Checkout</a>
            <a
              href="#"
              class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
            >Payments</a>
            <a
              href="#"
              class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
            >Billing</a>
            <a
              href="#"
              class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
            >Insights</a>
          </div>
          <div class="border-t-2 border-gray-200 px-4 pt-6">
            <a
              href="#"
              class="block font-medium text-gray-900 hover:text-gray-700"
            >Marketplace</a>
            <a
              href="#"
              class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
            >Partners</a>
            <a
              href="#"
              class="mt-4 block font-medium text-gray-900 hover:text-gray-700"
            >About</a>
          </div>
        </div>
        <div class="relative bg-white">
          <div class="px-4 pt-4 pb-6">
            <a
              href="#"
              class="block font-medium text-gray-900 hover:text-gray-700"
            >Log in</a>
          </div>
          <div class="p-4">
            <a
              href="#"
              class="block px-3 py-3 font-medium text-center bg-gray-300 rounded-lg text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >Create Account</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import uiMixin from '../mixins';
import UiInput from '../atoms/ui-input';
import UiButton from '../atoms/ui-button';

export default {
  mixins: [uiMixin],
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
