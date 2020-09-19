export default {
    target: 'static',

    head: {
        title: "Febri Hidayan",
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

    env: {
        appName: 'Febri Hidayan'
    },

    // https://id.nuxtjs.org/guides/configuration-glossary/configuration-router
    router: {
        // linkActiveClass: 'is-active',
        linkExactActiveClass: 'is-active'
    },

    components: true,

    modules: [
        '@nuxt/content'
    ]
}