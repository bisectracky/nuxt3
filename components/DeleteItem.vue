<template>
    <button @click="deleteItem">Delete Item</button>
  </template>
  
  <script setup>
  import { useMutation } from '@apollo/client/core';
  import { DELETE_ITEM } from '~/graphql/mutations';
  
  defineProps({ itemId: String });
  
  const deleteItemMutation = useMutation(DELETE_ITEM);
  
  const deleteItem = async () => {
    try {
      await deleteItemMutation({
        variables: { id: itemId }
      });
    } catch (error) {
      console.error('Error deleting item', error);
    }
  };
  </script>
  