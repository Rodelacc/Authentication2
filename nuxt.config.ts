// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    "@pinia/nuxt",
  ],
  // ssr: false,
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL,
    },
  },
});
