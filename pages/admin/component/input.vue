<template>
  <div id="form">
    <div class="container h-full my-24 mx-auto">
      <div class="w-full px-4 md:px-0">
        <h2 class="text-2xl md:text-5xl font-black text-blue text-left mb-4">Input</h2>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">Text form</h2>
          <div>
            <h3 class="text-lg font-black text-blue text-left mb-4">
              Empty state
            </h3>
            <InputBox />
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-black text-blue text-left mb-4">
              Disable state
            </h3>
            <InputBox disabled="true" />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">Text area</h2>
          <div>
            <h3 class="text-lg font-black text-blue text-left mb-4">
              Empty state
            </h3>
            <TextBox />
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-black text-blue text-left mb-4">
              Disable state
            </h3>
            <TextBox disabled="true" />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">
            Search form
          </h2>
          <div>
            <h3 class="text-lg font-black text-blue text-left mb-4">
              Empty state
            </h3>
            <SearchBox />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">Upload</h2>
          <div>
            <h3 class="text-lg font-black text-blue text-left mb-4">
              Empty state
            </h3>
            <FileBox />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">Upload</h2>
          <div>
            <h3 class="text-lg font-black text-blue text-left mb-4">
              Empty state
            </h3>
            <ImageBox />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">
            Select Box
          </h2>
          <div>
            <h3 class="text-lg font-black text-blue text-left mb-4">
              Empty state
            </h3>
            <SelectBox />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">Check Box</h2>
          <div>
            <CheckBox />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">Radio Box</h2>
          <div>
            <RadioBox />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">
            Radio Group
          </h2>
          <div>
            <h3 class="text-lg font-black mb-2">予約方法</h3>
            <div>
              <app-radio-group
                :radioItems="radioItems"
                v-model="value"
                name="radio"
              />
              <InputBox placeholder="https://" />
            </div>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-black mb-2">トップビジュアル</h3>
            <div>
              <RadioBox />
              <InputBox placeholder="https://" />
            </div>
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">Accordion</h2>
          <div>
          </div>
        </div>

        <div class="w-full mt-20">
          <p class="text-center">
            <a
              href="/hub"
              class="block md:inline-block text-center font-bold min-w-80 md:min-w-295 lg:min-w-335 bg-black text-white py-2 px-6 rounded"
              >戻る</a
            >
          </p>
        </div>
      </div>
      <!-- //w-full -->
    </div>
  </div>
</template>


<script>
import InputBox from "~/components/ui/Admin/Input/InputBox.vue";
import TextBox from "~/components/ui/Admin/Input/TextBox.vue";
import SearchBox from "~/components/ui/Admin/Input/SearchBox.vue";
import FileBox from "~/components/ui/Admin/Input/FileBox.vue";
import ImageBox from "~/components/ui/Admin/Input/ImageBox.vue";
import SelectBox from "~/components/ui/Admin/Input/SelectBox.vue";
import CheckBox from "~/components/ui/Admin/Input/CheckBox.vue";
import Radio from "~/components/ui/Admin/Input/Radio.vue";
import RadioGroup from "~/components/ui/Admin/Input/RadioGroup.vue";

export default {
  components: {
    InputBox,
    TextBox,
    SearchBox,
    FileBox,
    ImageBox,
    SelectBox,
    CheckBox,
    // RadioBox
    "app-radio": Radio,
    "app-radio-group": RadioGroup,
  },
  data() {
    return {
      value: "2",
    };
  },
  computed: {
    radioItems() {
      return [
        { value: "1", label: "電話予約のみ" },
        { value: "2", label: "予約リンクを設定する" },
      ];
    },
  },
};
</script>
