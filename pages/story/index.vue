<template>
    <div class="columns is-centered is-multiline">
        <div v-for="(item, index) in data" :key="index" class="column is-half">
            <NuxtLink
                :to="item._path"
            >
                <div class="card">
                    <div class="card-content has-text-centered">
                        <h1 class="title is-4">{{ item.title }}</h1>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const data = await queryContent('story').find()

useHead({
    titleTemplate: (title) => {
        return title ? `Story - ${title}` : title;
    }
})
</script>

<style scoped>
.card {
    border-radius: 8px;
}
</style>