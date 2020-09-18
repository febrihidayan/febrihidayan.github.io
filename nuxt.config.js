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
                content: process.env.npm_package_description
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

    components: true,

    modules: [
        '@nuxt/content'
    ]
}