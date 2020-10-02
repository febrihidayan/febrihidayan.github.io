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
        return {
            title: this.page.title + ' - ' + process.env.appName
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