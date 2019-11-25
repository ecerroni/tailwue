<template functional>
  <div
    :class="$options.methods.getClass(props.overrideClass, data.staticClass, data.class, 'flex items-center relative')"
    v-on="$options.methods.wrapper('cleanFromNestedListeners', [listeners, injections])"
    v-bind="$options.methods.wrapper('cleanFromNestedAttrs', [data.attrs, injections])"
  >
    <component
      v-bind="$options.methods.keepNestedComponentAttrs(data.attrs, 'UiInput')"
      :is="injections.components['UiInput']"
      :value="data.model.value"
      v-on="$options.methods.filterNestedComponentListeners(listeners, 'UiInput')"
      @input="listeners['input'] ? listeners['input']($event) : () => {}"
    >
      <div v-if="slots().icon" class="absolute ml-2">
        <slot name="icon"/>
      </div>
    </component>
    <component
      v-bind="$options.methods.wrapper('keepNestedComponentAttrs', [data.attrs, 'UiButton'])"
      v-on="$options.methods.wrapper('filterNestedComponentListeners', [listeners, 'UiButton'])"
      :is="injections.components['UiButton']"
      :class="$options.methods.wrapper('getNestedComponentClasses', [data.attrs, 'UiButton', 'ml-2'])" 
    >
    <!-- :class="$options.methods.getNestedComponentClasses(data.attrs, 'UiButton', 'ml-2')" -->
    <!-- means that I want to forward both class and overrideClass while adding another class, i.e. 'ml-2' -->
      <slot name="button"/>
    </component>
  </div>
</template>
<script>
import uiMixin from '../mixins';
import UiInput from '../atoms/ui-input';
import UiButton from '../atoms/ui-button';

export default {
  inheritAttrs: false,
  props: {
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
        UiButton,
        UiInput,
      },
    },
  },
};
</script>
