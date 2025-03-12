import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  const token = ref(localStorage.getItem('token') || null);

  const login = async (credentials) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('فشل تسجيل الدخول: بيانات غير صحيحة');
      }

      const data = await response.json();

      user.value = data.user;
      token.value = data.token;

      localStorage.setItem('token', token.value);

      console.log('تم تسجيل الدخول بنجاح!');
    } catch (error) {
      console.error('خطأ في تسجيل الدخول: ', error.message);
      throw new Error(error.message);
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;

    localStorage.removeItem('token');
    console.log('تم تسجيل الخروج');
  };

  const isAuthenticated = () => {
    return token.value !== null; // إذا كان الـ token موجودًا فهذا يعني أن المستخدم مسجل دخوله
  };

  return { user, token, login, logout, isAuthenticated };
});
