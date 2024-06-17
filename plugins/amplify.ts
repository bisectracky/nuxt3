import { defineNuxtPlugin } from '#app';
import { Amplify } from 'aws-amplify';
//import awsconfig from '../aws-exports'

export default defineNuxtPlugin((nuxtApp) => {
 // Amplify.configure(awsconfig)
})

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://byvtfofu6ff35lgmvmpyvjnjda.appsync-api.ap-northeast-1.amazonaws.com/graphql',
      region: 'us-west-2',
      defaultAuthMode: 'apiKey',
      apiKey: ''
    }
  }
});