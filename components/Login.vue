<template>
  <div>
    <input v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="handleLogin">Login</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        await Auth.signIn(this.username, this.password);
        console.log('User logged in');
      } catch (error) {
        this.error = error.message;
        console.error('Error logging in', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
