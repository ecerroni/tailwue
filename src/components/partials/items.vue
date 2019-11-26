<template>
  <div class="flex flex-col">
    <ui-menu-item
      :index="0"
      class="mb-4"
      @click="event('click', $event)"
    />
    <ui-menu-item
      class="ml-2"
      :index="1"
      :selected="true"
      @click="event('click', $event)"
    >
      <template #icon>
        <svg
          class="h-6 w-6 transition-all ease-out transition-medium"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L4 12.414V21a1 1 0 001 1h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a1 1 0 001-1v-8.586l.293.293a1 1 0 001.414-1.414l-9-9zM18 10.414l-6-6-6 6V20h3v-6a1 1 0 011-1h4a1 1 0 011 1v6h3v-9.586z"
          />
        </svg>
      </template>
      <div>Home</div>
    </ui-menu-item>
  </div>
</template>
<script>
import UiMenuItem from '../../ui/atoms/ui-menu-item';

export default {
  components: {
    UiMenuItem,
  },
  data() {
    return {
      input: '',
    };
  },
  methods: {
    event(e, data) {
      console.log(e, data);
    },
  },
};
</script>
