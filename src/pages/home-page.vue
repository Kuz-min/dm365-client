<script setup lang="ts">
  import { ref, onMounted, watch, inject } from 'vue';
  import type { NewsView } from '@core/news-view';
  import type { NewsService } from '@services/news-service'
  import NewsPreview from '@components/news-preview.vue';

  const newsService = inject<NewsService>('NewsService');
  const news = ref<NewsView[] | null>(null);
  const text = ref<string>('');

  onMounted((): void => {
    updateNews();
  });

  watch(text, (value): void => {
    updateNews(value);
  });

  async function updateNews(text?: string): void {
    try {
      news.value = await newsService.searchAsync(text);
    }
    catch (err: Error) {
      console.error(err.message);
    }
  }

</script>

<template>
  <div class="home-page">

    <div class="home-page__input ">
      <span class="home-page__input-label">Найти:</span>
      <input class="home-page__input-field" v-model="text" type="text">
    </div>

    <template v-for="n in news" :key="n.id">
      <NewsPreview class="home-page__news-preview" :news="n" />
    </template>

  </div>
</template>

<style lang="scss">

  .home-page {
    @extend .container;
  }

  .home-page__input {
    @extend .input-group;
  }

  .home-page__input-label {
    @extend .input-group-text;
  }

  .home-page__input-field {
    @extend .form-control;
  }

  .home-page__news-preview {
    @extend .border, .rounded-0, .g-0, .my-2;
  }
</style>
