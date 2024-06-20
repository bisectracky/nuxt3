<template>
    <div v-if="item">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useQuery } from '@apollo/client/core';
  import { GET_ITEM } from '~/graphql/queries';
  
  const item = ref(null);
  
  defineProps({ itemId: String });
  
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { id: itemId }
  });
  
  onMounted(() => {
    if (!loading && !error) {
      item.value = data.getItem;
    }
  });
  </script>
  