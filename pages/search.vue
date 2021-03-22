<template>
  <div>
    <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4">
      <div class="block md:flex md:flex-wrap -mx-4 result-wrapper">
        <NavSearch />
        <!-- //result -->

        <article
          class="search-index block w-full mx-auto mt-12 px-4 lg:order-1"
        >
          <h2 class="text-lg mb-6">12件 / 32件</h2>
          <section class="section-content">
            <SalonCardL />
            <SalonCardL />
            <SalonCardL />
            <SalonCardL />
            <SalonCardL />
          </section>

          <div class="py-3 flex items-center justify-center sm:px-6">
            <div class="flex-1 flex justify-between items-center sm:hidden">
              <a
                href="#"
                class="relative inline-flex items-center pr-4 pl-2 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.67 3.8701L9.9 2.1001L0 12.0001L9.9 21.9001L11.67 20.1301L3.54 12.0001L11.67 3.8701Z"
                    fill="#323232"
                  />
                </svg>
                <span class="block">前へ</span>
              </a>
              <span>1 / 2</span>
              <a
                href="#"
                class="ml-3 relative inline-flex items-center pl-4 pr-2 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
              >
                <span class="block">次へ</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <div
              class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center"
            >
              <div>
                <nav
                  class="relative z-0 inline-flex shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    class="relative rounded inline-flex items-center px-4 py-2 border border-gray-300 bg-black text-sm font-medium text-white hover:bg-gray-50"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    class="relative rounded inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    class="hidden rounded md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <span
                    class="relative rounded inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                  >
                    ...
                  </span>
                  <a
                    href="#"
                    class="hidden rounded md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    class="relative rounded inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    class="relative rounded inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    10
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <!-- //Pagenav -->
        </article>
      </div>
    </div>
  </div>
</template>


<script>
import SalonCardL from "~/components/ui/Cards/SalonCardL.vue";
import NavSearch from "~/components/ui/Navs/NavSearch.vue";

export default {
  components: {
    SalonCardL,
    NavSearch
  }
}
</script>
