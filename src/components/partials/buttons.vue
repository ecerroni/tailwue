<template>
  <div class="flex flex-col">
    <ui-button @click="event('click')" @mouseenter="event('mouseenter')" class="mb-4"/>
    <ui-button @click="event('click')" class="mb-4 bg-red-100">Custom</ui-button>
    <ui-button
      @click="e => event('click', e)"
      @mouseleave="e => event('mouseleave', e)"
      class="mb-4 bg-blue-700 text-gray-300"
    >Class manipulation</ui-button>
    <ui-button
      @click="event('click')"
      overrideClass="mb-4 bg-red-100  bg-green-100 rounded py-4"
    >Total Override</ui-button>
  </div>
</template>
<script>
import UiButton from '../../ui/atoms/ui-button';

export default {
  components: {
    UiButton,
  },
  methods: {
    event(e, data) {
      console.log(e, data);
      if (e === 'click') alert('Clicked');
    },
  },
};
</script>
