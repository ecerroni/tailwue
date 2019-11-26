<template>
  <div class="flex flex-col">
    <ui-button
      class="mb-4"
      @click="event('click')"
      @mouseenter="event('mouseenter')"
    />
    <ui-button
      class="mb-4 bg-red-100"
      @click="event('click')"
    >
      Custom
    </ui-button>
    <ui-button
      class="mb-4 bg-blue-400 text-gray-300"
      @click="e => event('click', e)"
      @mouseleave="e => event('mouseleave', e)"
    >
      Class manipulation
    </ui-button>
    <ui-button
      override-class="mb-4 bg-red-100  bg-green-100 rounded py-4"
      @click="event('click')"
    >
      Total Override
    </ui-button>
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
