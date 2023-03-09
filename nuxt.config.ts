// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Aseguradora',
      meta: [
        { name: 'description', content: 'My first nuxt site.' },
      ],
      link: [
        /* Google Web Fonts */
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        /*{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;500&display=swap' },
       Icon Font Stylesheet */
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3', crossorigin: 'anonymous' }
      ],
      script: [
        /* JavaScript Libraries */
        { src: "https://code.jquery.com/jquery-3.4.1.min.js" },
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" },
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js", integrity: "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13", crossorigin: "anonymous" },

        /* Parallaxs Libraries  */
         { src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" },  
        { src: "https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js" }, 
      ],
    }
  },

  /* Template Stylesheet */
  css: ['@/assets/css/style.css', '@/assets/css/bootstrap.min.css'],

  /* nuxt/image-edge borde */
  modules: [
    '@nuxt/image-edge',
  ]
})