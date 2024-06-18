import { defineNuxtPlugin } from '#app';
import { Amplify } from 'aws-amplify';
import config from '../aws-exports';

export default defineNuxtPlugin((nuxtApp) => {
    //Amplify.configure(config)
})

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://byvtfofu6ff35lgmvmpyvjnjda.appsync-api.ap-northeast-1.amazonaws.com/graphql',
      region: 'ap-northeast-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-oguhy*********************'
    }
  }
});