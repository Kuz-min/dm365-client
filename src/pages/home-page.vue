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
  <div class="container">

    <div class="input-group">
      <span class="input-group-text">Найти:</span>
      <input class="form-control" v-model="text" type="text">
    </div>

    <template v-for="n in news" :key="n.id">
      <NewsPreview class="my-2" :news="n" />
    </template>

  </div>
</template>
