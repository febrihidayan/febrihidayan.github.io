<template>
    <div class="columns is-centered">
        <div class="column is-8">
            <article class="content">
                <h1 class="title">{{ data.title }}</h1>
                <p>{{ data.description }}</p>
                <div class="tags">
                    <span v-for="(item, index) in data.tags" :key="index" class="tag">{{ item }}</span>
                </div>
                <hr>
                <NuxtContent :document="data" />
            </article>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

const data = await queryContent('docs', route.params.slug).findOne()

useHead({
    titleTemplate: (title) => {
        return title ? `${data.title} - ${title}` : title;
    }
})
</script>