<template>
  <div class="w-full md:w-2/4 px-2">
    <label
      class="relative h-48 w-full text-gray-600 flex flex-col justify-center items-center bg-white p-8 rounded cursor-pointer overflow-hidden file-box"
    >
       <input
        class="hidden"
        type="file"
        accept="image/jpeg, image/png"
        @change="onImageChange"
      />
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 7.5V10.49C19.5 10.49 17.51 10.5 17.5 10.49V7.5H14.5C14.5 7.5 14.51 5.51 14.5 5.5H17.5V2.5H19.5V5.5H22.5V7.5H19.5ZM16.5 11.5V8.5H13.5V5.5H5.5C4.4 5.5 3.5 6.4 3.5 7.5V19.5C3.5 20.6 4.4 21.5 5.5 21.5H17.5C18.6 21.5 19.5 20.6 19.5 19.5V11.5H16.5ZM5.5 19.5L8.5 15.5L10.5 18.5L13.5 14.5L17.5 19.5H5.5Z"
          fill="black"
          fill-opacity="0.6"
        />
      </svg>
      写真を追加
      <div v-show="avatar" class="absolute inset-0 w-full h-full flex flex-wrap flex-col justify-items-center items-center">
        <p v-show="avatar" class="m-auto text-center font-black text-white z-30">
          <span class="block">
            <svg class="mx-auto" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 7.5V10.49C19.5 10.49 17.51 10.5 17.5 10.49V7.5H14.5C14.5 7.5 14.51 5.51 14.5 5.5H17.5V2.5H19.5V5.5H22.5V7.5H19.5ZM16.5 11.5V8.5H13.5V5.5H5.5C4.4 5.5 3.5 6.4 3.5 7.5V19.5C3.5 20.6 4.4 21.5 5.5 21.5H17.5C18.6 21.5 19.5 20.6 19.5 19.5V11.5H16.5ZM5.5 19.5L8.5 15.5L10.5 18.5L13.5 14.5L17.5 19.5H5.5Z" fill="white"/>
            </svg>
          </span>
          <span class="block">写真を編集</span>
        </p>
        <span v-show="avatar" class="absolute inset-0 bg-black opacity-30 z-20"></span>
        <img v-show="avatar" :src="avatar" alt="Avatar" class="absolute inset-0 z-10">
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ImageUploder',
  data () {
    return {
   		avatar: ''
    }
  },
  methods: {
    getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    onImageChange (e) {
      const images = e.target.files || e.dataTransfer.files
      this.getBase64(images[0])
        .then(image => this.avatar = image)
    },
  }
};
</script>
