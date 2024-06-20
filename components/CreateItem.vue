<template>
    <div>
      <form @submit.prevent="createItem">
        <input v-model="name" placeholder="Name" />
        <input v-model="description" placeholder="Description" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useMutation } from '@apollo/client/core';
  import { CREATE_ITEM } from '~/graphql/mutations';
  
  const name = ref('');
  const description = ref('');
  const createItemMutation = useMutation(CREATE_ITEM);
  
  const createItem = async () => {
    try {
      await createItemMutation({
        variables: { name: name.value, description: description.value }
      });
      name.value = '';
      description.value = '';
    } catch (error) {
      console.error('Error creating item', error);
    }
  };
  </script>
  