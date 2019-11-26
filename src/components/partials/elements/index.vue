<template>
  <div>
    <h2>SEARCH BOX</h2>
    <ui-searchbox
      v-model="searchInputOne"
      class="w-2/3 "
      :ui-input__placeholder="dynamicPlaceholder"
      ui-input__class="pl-16 w-2/3"
      @ui-button__click="event('ui-button-click', 'One')"
    />
    v-model: {{ searchInputOne }}
    <ui-searchbox
      v-model="searchInputTwo"
      class="w-7/12 mt-4 mb-2"
      ui-input__placeholder="Custom placeholder with icon and styles"
      ui-input__override-class="pr-4 py-2 bg-gray-800 rounded-lg text-sm placeholder-gray-400 text-white focus:bg-gray-400 focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
      ui-button__class="bg-yellow-300"
      @ui-button__click="event('ui-button-click', 'Two')"
    >
      <template #icon>
        <ui-icon />
      </template>
    </ui-searchbox>
    v-model: {{ searchInputTwo }}
    <h2 class="my-4">
      MENU VERTICAL
    </h2>
    <div class="antialiased bg-gray-200 p-8">
      <div class="flex justify-center">
        <ui-menu-vertical
          :selected="selected"
          ui-menu-item-highlight__class="bg-yellow-100"
          ui-menu-ul__class="ml-4"
          ui-menu-li__class="text-red-700"
          ui-menu-item__class="ml-8"
          ui-menu-item-link__class="text-red-400"
          :links="['Link_1', 'Link_2', { icon: 'home', label: 'Link_3'}, 4, 5, 6 ,'Link_7']"
          @ui-menu-item__click="selected = $event.payload.index"
          @ui-menu-item-link__click="event('menu-item-link', $event)"
        />
      </div>
    </div>
    <h2 class="my-4">
      TABLES
    </h2>
    <h3>Implementation #1</h3>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <ui-table
          ui-table-head__class="bg-red-100"
          :headers="['Q', 'W', 'E', 'R', 'T', 'Y']"
          @ui-table-head__click.stop="e => event('table-head', e)"
          @click="e => event('table', e)"
        >
          <ui-table-row @click="event('table row', $event)">
            <div class="flex">
              <div class="flex-shrink-0 w-10 h-10">
                <img
                  class="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt
                >
              </div>
              <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap">
                  Molly Sanders
                </p>
                <p class="text-gray-600 whitespace-no-wrap">
                  000004
                </p>
              </div>
            </div>
            <div
              class="bg-yellow-700"
              @click.stop="e => event('table-td', e)"
            >
              <p class="text-gray-900 whitespace-no-wrap bg-yellow-700">
                $20,000
              </p>
              <p class="text-gray-600 whitespace-no-wrap">
                USD
              </p>
            </div>
            <div>
              <p class="text-gray-900 whitespace-no-wrap">
                Sept 28, 2019
              </p>
              <p class="text-gray-600 whitespace-no-wrap">
                Due in 3 days
              </p>
            </div>
          </ui-table-row>
          <ui-table-row>
            <div class="flex">
              <div class="flex-shrink-0 w-10 h-10">
                <img
                  class="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt
                >
              </div>
              <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap">
                  Molly Sanders
                </p>
                <p class="text-gray-600 whitespace-no-wrap">
                  000004
                </p>
              </div>
            </div>
            <div
              class="bg-yellow-700"
              @click.stop="e => event('table-td', e)"
            >
              <p class="text-gray-900 whitespace-no-wrap bg-yellow-700">
                $20,000
              </p>
              <p class="text-gray-600 whitespace-no-wrap">
                USD
              </p>
            </div>
            <div>
              <p class="text-gray-900 whitespace-no-wrap">
                Sept 28, 2019
              </p>
              <p class="text-gray-600 whitespace-no-wrap">
                Due in 3 days
              </p>
            </div>
            <div>
              <p class="text-gray-900 whitespace-no-wrap">
                Sept 28, 2019
              </p>
              <p class="text-gray-600 whitespace-no-wrap">
                Due in 3 days
              </p>
            </div>
            <span
              class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
            >
              <span
                aria-hidden
                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              />
              <span class="relative">Paid</span>
            </span>
            <button
              type="button"
              class="inline-block text-gray-500 hover:text-gray-700"
            >
              <svg
                class="inline-block h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                />
              </svg>
            </button>
          </ui-table-row>
        </ui-table>
      </div>
    </div>
    <h3 class="mt-4">
      Implementation #2
    </h3>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <ui-table
          class="w-full"
          @click="e => event('table', e)"
        >
          <template #tableHeader>
            <ui-table-head
              class="text-gray-900 flex"
              @click.stop="e => event('table-head', e)"
            >
              <div>AAAA</div>
              <div>BBB</div>
              <div>AAAA</div>
              <div>BBB</div>
            </ui-table-head>
          </template>
          <template #tableBody>
            <ui-table-body>
              <ui-table-row>
                <div
                  class="bg-yellow-700"
                  @click.stop="e => event('table-td', e)"
                >
                  <p class="text-gray-900 whitespace-no-wrap bg-yellow-700">
                    $20,000
                  </p>
                  <p class="text-gray-600 whitespace-no-wrap">
                    USD
                  </p>
                </div>
                <div>
                  <p class="text-gray-900 whitespace-no-wrap">
                    Sept 28, 2019
                  </p>
                  <p class="text-gray-600 whitespace-no-wrap">
                    Due in 3 days
                  </p>
                </div>
              </ui-table-row>
            </ui-table-body>
          </template>
        </ui-table>
      </div>
      <h2 class="my-4">
        NAVIGATION
      </h2>
      <ui-navigation-horizontal
        :links="['One', 'Two', 'Three']"
      >
        <template #logo>
          Logo
        </template>
        <template #actions>
          <p>Action</p>
        </template>
      </ui-navigation-horizontal>
    </div>
  </div>
</template>
<script>
import UiSearchbox from "../../../ui/elements/ui-searchbox";
import UiIcon from "../../../ui/atoms/ui-icon";
import UiTable from "../../../ui/elements/ui-table";
import UiTableHead from "../../../ui/atoms/ui-table-head";
import UiTableBody from "../../../ui/atoms/ui-table-body";
import UiTableRow from "../../../ui/atoms/ui-table-row";
import UiMenuVertical from "../../../ui/elements/ui-menu-vertical";
import UiNavigationHorizontal from "../../../ui/elements/ui-navigation-horizontal";
export default {
  components: {
    UiSearchbox,
    UiIcon,
    UiTable,
    UiTableHead,
    UiTableBody,
    UiTableRow,
    UiMenuVertical,
    UiNavigationHorizontal
  },
  data() {
    return {
      searchInputOne: "",
      searchInputTwo: "",
      dynamicPlaceholder: "Dynamic placeholder",
      selected: undefined
    };
  },
  methods: {
    event(e, data) {
      if (e === "ui-button-click") {
        console.log(e, data, this[`searchInput${data}`]);
        const message = !this[`searchInput${data}`]
          ? "Please input a text first"
          : `You searched for ${this[`searchInput${data}`]}`;
        alert(message);
        this[`searchInput${data}`] = "";
        this.dynamicPlaceholder = "Search again";
      } else {
        console.log(e, data);
      }
    }
  }
};
</script>
