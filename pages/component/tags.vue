<template>
  <div class="container h-full my-24 mx-auto">
    <div class="w-full px-4 md:px-0">
      <h2 class="text-2xl md:text-5xl font-black text-blue text-left mb-4">
        Button
      </h2>
      <div>
        <h2 class="text-base text-blue text-left mb-4">
          記入済み・未記入ステータス（スタッフのシフト）
        </h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <FinishTag />
          </li>
          <li class="px-4">
            <NotFinishTag />
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">
          転記済み・未転記ステータス
        </h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <PostingTag />
          </li>
          <li class="px-4">
            <NotPostingTag />
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">必須・任意ステータス</h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <GoldTag>必須</GoldTag>
          </li>
          <li class="px-4">
            <GrayTag>任意</GrayTag>
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">
          公開中・非公開ステータス
        </h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <GoldTag>公開中</GoldTag>
          </li>
          <li class="px-4">
            <GrayTag>非公開</GrayTag>
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">
          表示・非表示ステータス
        </h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <GoldTag white>表示</GoldTag>
          </li>
          <li class="px-4">
            <GrayTag white>非表示</GrayTag>
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">
          表示・非表示ステータス
        </h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <ReservationTag>来店待ち</ReservationTag>
          </li>
          <li class="px-4">
            <ReservationTag>受付済み</ReservationTag>
          </li>
          <li class="px-4">
            <ReservationTag>会計済み</ReservationTag>
          </li>
        </ul>
        <ul class="flex flex-wrap -mx-4 mt-4">
          <li class="px-4">
            <ReservationTag gray>サロンキャンセル</ReservationTag>
          </li>
          <li class="px-4">
            <ReservationTag gray>お客様キャンセル</ReservationTag>
          </li>
          <li class="px-4">
            <ReservationTag gray>無断キャンセル</ReservationTag>
          </li>
        </ul>
        <ul class="flex flex-wrap -mx-4 mt-4">
          <li class="px-4">
            <ReservationTag red>日程調整依頼中</ReservationTag>
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">有料プラン機能</h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <PaidTag />
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">既読・未読ステータス</h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <UnreadTag />
          </li>
          <li class="px-4">
            <ReadTag />
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">お知らせステータス</h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <NewsTag>運営より</NewsTag>
          </li>
          <li class="px-4">
            <NewsTag gold>サロンより</NewsTag>
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <h2 class="text-base text-blue text-left mb-4">カテゴリ</h2>
        <ul class="flex flex-wrap -mx-4">
          <li class="px-4">
            <CategoryTag>ショート</CategoryTag>
          </li>
        </ul>
      </div>

      <div class="w-full mt-20">
        <p class="text-center">
          <a
            href="/"
            class="block md:inline-block text-center font-black min-w-80 md:min-w-295 lg:min-w-335 bg-black text-white py-2 px-6 rounded"
            >トップに戻る</a
          >
        </p>
      </div>
    </div>
    <!-- //w-full -->
  </div>
</template>

<script>
import FinishTag from "~/components/ui/Tags/FinishTag.vue";
import NotFinishTag from "~/components/ui/Tags/NotFinishTag.vue";
import PostingTag from "~/components/ui/Tags/PostingTag.vue";
import NotPostingTag from "~/components/ui/Tags/NotPostingTag.vue";
import GoldTag from "~/components/ui/Tags/GoldTag.vue";
import GrayTag from "~/components/ui/Tags/GrayTag.vue";
import ReservationTag from "~/components/ui/Tags/ReservationTag.vue";
import PaidTag from "~/components/ui/Tags/PaidTag.vue";
import ReadTag from "~/components/ui/Tags/ReadTag.vue";
import UnreadTag from "~/components/ui/Tags/UnreadTag.vue";
import NewsTag from "~/components/ui/Tags/NewsTag.vue";
import CategoryTag from "~/components/ui/Tags/CategoryTag.vue";

export default {
  components: {
    FinishTag,
    NotFinishTag,
    PostingTag,
    NotPostingTag,
    GoldTag,
    GrayTag,
    ReservationTag,
    PaidTag,
    ReadTag,
    UnreadTag,
    NewsTag,
    CategoryTag
  }
};
</script>
