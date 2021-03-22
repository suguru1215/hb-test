<template>
  <div class="px-4 md:px-0">
    <p
      class="fixed md:relative bottom-4 inset-x-4 md:bottom-0 md:inset-x-0 text-right md:mb-8 z-10"
    >
      <a
        href="#"
        class="block text-center w-full md:w-56 h-12 bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 ml-auto rounded leading-7"
        >新規登録</a
      >
    </p>
    <ul class="w-full flex flex-wrap relative mx-auto">
      <li class="w-full reserve-menu">
        <div
          class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
        >
          <select
            class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            name="prefectures"
            id="prefectures"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <nuxt-link
            to="single"
            class="thumb-card__link"
            append
          >
            <div class="flex flex-wrap items-center w-full">
              <div
                class="ml-2 overflow-hidden thumb-card__thumb"
              >
                <img
                  src="~/assets/images/admin/thumb_01.jpg"
                  class="w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div
                class="relative flex flex-col font-bold thumb-card__col"
              >
                <h3 class="text-base font-bold mb-1">
                  水分量を増やして潤いある髪に
                </h3>
                <p class="text-sm text-right mt-auto">
                  <a
                    href="#"
                    class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                    >表示</a
                  >
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </li>
      <li class="w-full mt-3 reserve-menu">
        <div
          class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
        >
          <select
            class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            name="prefectures"
            id="prefectures"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <nuxt-link
            to="single"
            class="thumb-card__link"
            append
          >
            <div class="flex flex-wrap items-center w-full">
              <div
                class="ml-2 overflow-hidden thumb-card__thumb"
              >
                <img
                  src="~/assets/images/admin/thumb_01.jpg"
                  class="w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div
                class="relative flex flex-col font-bold thumb-card__col"
              >
                <h3 class="text-base font-bold mb-1">
                  水分量を増やして潤いある髪に
                </h3>
                <p class="text-sm text-right mt-auto">
                  <a
                    href="#"
                    class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                    >表示</a
                  >
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </li>
      <li class="w-full mt-3 reserve-menu">
        <div
          class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
        >
          <select
            class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            name="prefectures"
            id="prefectures"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <nuxt-link
            to="single"
            class="thumb-card__link"
            append
          >
            <div class="flex flex-wrap items-center w-full">
              <div
                class="ml-2 overflow-hidden thumb-card__thumb"
              >
                <img
                  src="~/assets/images/admin/thumb_01.jpg"
                  class="w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div
                class="relative flex flex-col font-bold thumb-card__col"
              >
                <h3 class="text-base font-bold mb-1">
                  水分量を増やして潤いある髪に
                </h3>
                <p class="text-sm text-right mt-auto">
                  <a
                    href="#"
                    class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                    >表示</a
                  >
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </li>
    </ul>
    <div class="flex flex-wrap items-center mt-8 mb-4">
      <p
        class="text-sm inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
      >
        非表示
      </p>
      <h3 class="text-base font-normal ml-2">こだわり</h3>
      <select
        class="text-sm text-black border-2 border-gray-100 bg-transparent px-4 ml-auto rounded-lg focus:outline-none search-input"
        name="prefectures"
        id="prefectures"
      >
        <option value="1">1</option>
      </select>
    </div>
    <ul class="w-full flex flex-wrap relative mx-auto">
      <li class="w-full reserve-menu">
        <div
          class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
        >
          <select
            class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 py-1 rounded-lg focus:outline-none search-input"
            name="prefectures"
            id="prefectures"
          >
            <option value=""></option>
          </select>
          <nuxt-link
            to="single"
            class="thumb-card__link"
            append
          >
            <div class="flex flex-wrap items-center w-full">
              <div
                class="ml-2 overflow-hidden thumb-card__thumb"
              >
                <img
                  src="~/assets/images/admin/thumb_01.jpg"
                  class="w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div
                class="relative flex flex-col font-bold thumb-card__col"
              >
                <h3 class="text-base font-bold mb-1">
                  水分量を増やして潤いある髪に
                </h3>
                <p class="text-sm text-right mt-auto">
                  <a
                    href="#"
                    class="inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
                    >非表示</a
                  >
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </li>
      <li class="w-full mt-3 reserve-menu">
        <div
          class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
        >
          <select
            class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            name="prefectures"
            id="prefectures"
          >
            <option value=""></option>
          </select>
          <nuxt-link
            to="single"
            class="thumb-card__link"
            append
          >
            <div class="flex flex-wrap items-center w-full">
              <div
                class="ml-2 overflow-hidden thumb-card__thumb"
              >
                <img
                  src="~/assets/images/admin/thumb_01.jpg"
                  class="w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div
                class="relative flex flex-col font-bold thumb-card__col"
              >
                <h3 class="text-base font-bold mb-1">
                  水分量を増やして潤いある髪に
                </h3>
                <p class="text-sm text-right mt-auto">
                  <a
                    href="#"
                    class="inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
                    >非表示</a
                  >
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import InputBox from "~/components/ui/Input/InputBox.vue";

export default {
  layout: 'adminback',
  head() {
    return {
      title: 'こだわり一覧',
      bodyAttrs: {
        class: 'body-admin'
      }
    }
  },
  components: {

  },
  data(){
    return {
      header: {
        title: 'こだわり一覧'
      }
    }
  },
  mounted() {
    this.updateHeader()
  },
  methods: {
    updateHeader() {
      this.$nuxt.$emit('updateHeader', this.header.title)
    }
  }
}
</script>
