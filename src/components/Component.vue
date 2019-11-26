<template>
  <div class="m-8">
    <h1 class="flex justify-center font-semibold text-gray-700 text-lg">
      ATOMS
    </h1>
    <h2>BUTTONS</h2>
    <buttons />

    <h2>INPUTS</h2>
    <inputs />

    <h2>ITEMS</h2>
    <items />
    <hr class="my-12">

    <h1 class="flex justify-center font-semibold text-gray-700 text-lg">
      ELEMENTS
    </h1>
    <elements />
  </div>
</template>
<script>
import Buttons from './partials/buttons';
import Inputs from './partials/inputs';
import Items from './partials/items';
import Elements from './partials/elements';

import UiButton from '../ui/atoms/ui-button';
import UiInput from '../ui/atoms/ui-input';
import UiIcon from '../ui/atoms/ui-icon';
import UiLabel from '../ui/atoms/ui-label';
import UiSearchbox from './partials/elements';
import UiTable from '../ui/elements/ui-table';
import UiTableHeader from '../ui/atoms/ui-table-head';
import UiTableBody from '../ui/atoms/ui-table-body';
import UiTableRow from '../ui/atoms/ui-table-row';

export default {
  components: {
    Buttons,
    Inputs,
    Elements,
    //
    // UiButton,
    // UiInput,
    // UiIcon,
    // UiLabel,
    // UiSearchbox,
    // UiTable,
    // UiTableHeader,
    // UiTableBody,
    // UiTableRow,
    Items,
  },
  data() {
    return {
      input: '',
      searchInput: '',
      users: [
        {
          id: 1,
          name: 'Aron',
        },
        {
          id: 2,
          name: 'Mike',
        },
      ],
    };
  },
  methods: {
    rowClicked() {
      console.log('rowClicked');
    },
    nodeClicked() {
      console.log('nodeClicked');
    },
    headClick(h) {
      console.log(`Head Clicked with value: ${h.value} at index [${h.index}]`);
    },
    searchboxButtonClick() {
      alert(`Search Button Clicked with value: ${this.searchInput}`);
    },
    buttonMouseEnter() {
      console.log('mouse entered button area');
    },
    iconMouseLeave() {
      console.log('mouse left icon area');
    },
    inputChanged() {
      console.log('inputChanged');
    },
  },
};
</script>
