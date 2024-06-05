// plugins/amplify.js
import { defineNuxtPlugin } from '#app';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';

export default defineNuxtPlugin(() => {
  Amplify.configure(awsconfig);
});
