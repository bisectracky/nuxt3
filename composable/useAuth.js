import { ref } from 'vue';
import { Auth } from 'aws-amplify';

export function useAuth() {
  const user = ref(null);

  const login = async (username, password) => {
    try {
      const userData = await Auth.signIn(username, password);
      user.value = userData;
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  const logout = async () => {
    try {
      await Auth.signOut();
      user.value = null;
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  const getCurrentUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      user.value = userData;
    } catch (error) {
      console.error('Error getting current user', error);
    }
  };

  return {
    user,
    login,
    logout,
    getCurrentUser
  };
}
