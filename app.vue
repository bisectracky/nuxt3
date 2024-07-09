<template>
  <div>

    <body class="flex items-center justify-center">
      <h1
        class="bg-gradient-to-r from-yellow-400 from-0% via-orange-500 via-30% to-pink-500 to-90% text-4xl font-bold text-red-200">
        Orecchiette, Langoustine and Fennel Flower</h1>
    </body>
  </div><br>
  <div class="flex space-x-4">
    <h1 class="bg-gradient-to-br from-yellow-400 from-0% via-orange-500 via-30% to-pink-500 to-90% text-2xl">
      <button @click="signUp"
        class="inline-block w-1/2 md:w-full px-5 py-2 bg-gradient-to-br font-semibold text-white hover:from-orange-400 hover:to-pink-500">
        Sign Up
      </button>
    </h1>
  </div><br>

  <body class="flex flex-col items-center h-50 justify-center text-red-300 md-6">
    <div id="app" class="flex space-x-4">
      <h1>
        <button @click="signIn"
          class="inline-block mb-6 bg-gradient-to-br from-blue-500 from-0% via-indigo-300 via-30% to-green-300 to-90% px-5 py-2 font-semibold text-white hover:from-teal-400 hover:to-blue-500">
          Sign In
        </button>
      </h1>
      <h1>
        <button @click="signOut"
          class="inline-block mb-6 bg-gradient-to-br from-blue-500 from-0% via-indigo-300 via-30% to-green-300 to-90% px-4 py-2 font-semibold text-white hover:from-teal-400 hover:to-blue-500">
          Sign Out
        </button>
      </h1>
    </div>
  </body>
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

const signIn = async () => {
  try {
    const user = await Auth.signIn('username', 'password')
    console.log('User signed in:', user)
  } catch (error) {
    console.error('Error signing in:', error)
  }
};

const signOut = async () => {
  try {
    await Auth.signOut()
    console.log('User signed out')
  } catch (error) {
    console.error('Error signing out:', error)
  }
};
</script>