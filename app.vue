<template>
  <div>
    <h1 class="bg-red-400 text-3xl font-bold underline">Amplify in Nuxt 3</h1>
    <button @click="signUp">Sign Up</button>
  </div>
</template>


<script setup>
const signUp = async () => {
  try {
    const user = await Auth.signUp({
      username: 'testuser',
      password: 'Test1234!',
      attributes: {
        email: 'testuser@example.com'
      }
    });
    console.log(user);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
</script>