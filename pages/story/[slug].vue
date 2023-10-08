<template>
    <article class="content">
        <h1 class="title">{{ data.title }}</h1>
        <p>{{ data.description }}</p>
        <hr>
        <ContentRenderer :value="data" />
    </article>
</template>

<script setup>
const route = useRoute()

const data = await queryContent('story', route.params.slug).findOne()

useHead({
    titleTemplate: (title) => {
        return title ? `${data.title} - ${title}` : title;
    },
    meta: [
        {
            hid: 'robots',
            name: 'robots',
            content: 'all,allow,follow',
        },
        {
            hid: 'title',
            name: 'title',
            content: data.title,
        },
        {
            hid: 'description',
            name: 'description',
            content: data.description,
        },
        {
            hid: 'og:title',
            name: 'og:title',
            content: data.title,
        },
        {
            hid: 'og:description',
            name: 'og:description',
            content: data.description,
        },
        {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: data.title,
        },
        {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: data.description,
        },
    ],
})
</script>
