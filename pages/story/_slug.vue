<template>
    <div class="columns is-centered">
        <div class="column is-8">
            <article class="content">
                <h1 class="title">{{ page.title }}</h1>
                <p>{{ page.description }}</p>
                <hr>
                <NuxtContent :document="page" />
            </article>
        </div>
    </div>
</template>

<script>
export default {

    head() {
        const title = this.page.title
        return {
            title,
            titleTemplate: `%s - ${process.env.appName}`,
            meta: [
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'all,allow,follow',
                },
                {
                    hid: 'title',
                    name: 'title',
                    content: title,
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.post.description
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: title
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.post.description
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: title
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.post.description
                },
            ]
        }
    },

    async asyncData({ $content, route }) {
        const page = await $content(route.fullPath).fetch()

        return {
            page
        }
    }

}
</script>