// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Febri Hidayan",
            titleTemplate: (title) => { return title ? `${title} | Febri Hidayan` : `Febri Hidayan` },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: "Mengenali lebih jauh tentang saya lewat situs ini dan belajar lebih banyak pengetahuan disini."
                }
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css"
                }
            ]
        },
    },

    // https://nuxt.com/docs/guide/going-further/custom-routing#using-nuxtconfig
    router: {
        options: {
            // linkActiveClass: 'is-active',
            linkExactActiveClass: 'is-active',
        },
    },

    modules: [
        '@nuxt/content',
        'nuxt-windicss',
    ]
})