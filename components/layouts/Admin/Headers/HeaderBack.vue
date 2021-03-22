<template>
  <header class="bg-white border-b-2 border-black header">
    <nav class="relative md:py-3">
      <div
        class="container max-w-full mx-auto px-4 flex flex-wrap items-center justify-between mt-0 py-3 md:py-0"
      >
        <div class="relative w-wrap mx-auto flex items-center">
          <p class="absolute left-0">
            <a @click="$router.go(-1)" class="flex items-center text-black cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.67 3.87001L9.9 2.10001L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.87001Z"
                  fill="#323232"
                />
              </svg>
              <span class="block">戻る</span>
            </a>
          </p>
          <h1 class="mx-auto font-normal text-lg">{{ title }}</h1>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
