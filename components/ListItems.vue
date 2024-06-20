<template>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useQuery } from '@apollo/client/core';
  import { LIST_ITEMS } from '~/graphql/queries';
  
  const items = ref([]);
  const { loading, error, data } = useQuery(LIST_ITEMS);
  
  onMounted(() => {
    if (!loading && !error) {
      items.value = data.listItems;
    }
  });
  </script>
  