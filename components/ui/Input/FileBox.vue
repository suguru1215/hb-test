<template>
  <div>
    <div class="w-full md:w-96 px-2 py-3 bg-white border-2 border-gray-400 rounded">
      <label
        class="relative inline-block font-black text-white bg-black py-1 px-8 rounded cursor-pointer"
      >
      ファイルを選択
        <input type="file" @change="onFileChange" accept="img/*" class="hidden" />
      </label>
    </div>
    <div v-show="uploadedImage" @click="remove" class="w-full md:w-96 relative inline-block font-black bg-white border-2 border-gray-400 py-2 px-4 mt-4 rounded">
      <div class="flex flex-wrap items-center justify-between">
        <p>{{ img_name }}</p>
        <i class="mdi mdi-close-circle-outline text-2xl align-middle cursor-pointer"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedImage: '',
      img_name: '',
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
      const imgNameExe = files[0].name.split('.');
      let imgName = imgNameExe[0];
      const imgExe = imgNameExe[1];
      const maxBytes = 20;
      const imgNameBytes = encodeURIComponent(imgName).replace(/%../g, 'x').length;

      if (imgNameBytes > maxBytes) {
        const zenkaku = imgNameBytes - imgName.length;
        if (zenkaku > 0) {
          imgName = imgName.slice(0, maxBytes / 2 - imgName.length) + '..';
        } else {
          imgName = imgName.slice(0, maxBytes - imgNameBytes) + '..';
        }
      }
      imgName = imgName + '.' + imgExe;
      this.img_name = imgName;
    },
    createImage(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    remove() {
      this.uploadedImage = false;
    },
  },
};
</script>
