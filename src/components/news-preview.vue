<script setup lang="ts">
  import moment from 'moment';
  import { computed } from 'vue';
  import type { NewsView } from '@core/news-view';

  const props = defineProps<{ news: NewsView }>();

  const news = computed(() => props.news);

</script>

<template>
  <div class="row border rounded-0 g-0">

    <div class="col-12 col-lg-5 col-xl-4">
      <img class="w-100" :src="news.imageUri" v-if="news.imageUri">
    </div>

    <div class="col flex-column m-2">
      <div class="d-flex flex-row align-items-center">
        <div class="me-2" style="color:red">{{(moment(news.date)).format('DD MMMM YYYY')}}</div>
        <div class="p-1" style="background-color:red; color:white" v-if="news.label">{{news.label}}</div>
      </div>
      <a style="color: black; text-decoration: none; font-weight: bold" href="#">{{news.title}}</a>
      <div>{{news.text}}</div>
    </div>

  </div>
</template>
