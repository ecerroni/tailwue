<template>
  <div class="flex flex-col">
    <ui-input class="mb-4" @mouseenter="event('mouseenter')"/>
    <ui-input class="mb-4" type="text" placeholder="Custom Placeholder"/>
    <ui-input
      class="mb-4"
      type="password"
      placeholder="Understands type attribute. For example I am a password"
    />
    <ui-input class="mb-4" type="text" placeholder="Works with v-model" v-model="input"/>
    input value: {{input}}
  </div>
</template>
<script>
import UiInput from '../../ui/atoms/ui-input';

export default {
  data() {
    return {
      input: '',
    };
  },
  components: {
    UiInput,
  },
  methods: {
    event(e, data) {
      console.log(e, data);
    },
  },
};
</script>
