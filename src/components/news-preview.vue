<script setup lang="ts">
  import moment from 'moment';
  import { computed } from 'vue';
  import type { NewsView } from '@core/news-view';

  const props = defineProps<{ news: NewsView }>();

  const news = computed(() => props.news);

</script>

<template>
  <div class="news-preview">

    <div class="news-preview__image-container">
      <img class="news-preview__image" :src="news.imageUri" v-if="news.imageUri">
    </div>

    <div class="news-preview__description-container">
      <div class="news-preview__attributes">
        <div class="news-preview__date">{{(moment(news.date)).format('DD MMMM YYYY')}}</div>
        <div class="news-preview__label" v-if="news.label">{{news.label}}</div>
      </div>
      <a class="news-preview__title" href="#">{{news.title}}</a>
      <div class="news-preview__text">{{news.text}}</div>
    </div>

  </div>
</template>

<style lang="scss">
  .news-preview {
    @extend .row;
  }

  .news-preview__image-container {
    @extend .col-12, .col-lg-5, .col-xl-4;
  }

  .news-preview__image {
    @extend .w-100;
  }

  .news-preview__description-container {
    @extend .col, .d-flex, .flex-column, .m-2;
  }

  .news-preview__attributes {
    @extend .d-flex, .flex-row, .align-items-center;
  }

  .news-preview__date {
    @extend .me-2;
    color: red;
  }

  .news-preview__label {
    @extend .p-1;
    background-color: red;
    color: white;
  }

  .news-preview__title {
    color: black;
    text-decoration: none;
    font-weight: bold;
  }

  .news-preview__text {
  }
</style>
