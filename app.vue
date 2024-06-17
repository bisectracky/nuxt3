<template>
  <div>
    <body class="flex items-center justify-center">
      <h1 class="bg-gradient-to-r from-yellow-400 from-0% via-orange-500 via-30% to-pink-500 to-90% text-4xl font-bold text-red-200">Orecchiette, Langoustine and Fennel Flower</h1>
    </body>
  </div>
  <div>
    <body class="flex flex-col items-center h-10 text-red-700">
      <h1 class="mb-8 bg-gradient-to-r from-yellow-400 from-0% via-orange-500 via-30% to-pink-500 to-90% px-4 py-2 font-semibold text-white hover:from-teal-400 hover:to-blue-500"><button @click="signUp">Sign Up</button></h1>
    </body>
  </div>
  <div>
    <body class="flex flex-col items-center h-50 justify-center text-red-300 md-6">
      <h1><button @click="signIn" class="md-6 bg-gradient-to-br from-blue-500 from-0% via-indigo-300 via-30% to-green-300 to-90% px-5 py-2 font-semibold text-white hover:from-teal-400 hover:to-blue-500">Sign In</button></h1>
      <h1><button @click="signOut" class="md-6 bg-gradient-to-br from-blue-500 from-0% via-indigo-300 via-30% to-green-300 to-90% px-4 py-2 font-semibold text-white hover:from-teal-400 hover:to-blue-500">Sign Out</button></h1>
    </body>
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