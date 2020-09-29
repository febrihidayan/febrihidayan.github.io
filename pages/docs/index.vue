<template>
    <div class="columns is-centered is-multiline">
        <div v-for="(item, index) in data" :key="index" class="column is-4">
            <NuxtLink
                :to="{
                    name: 'packages-slug',
                    params: {
                        slug: item.slug
                    }
                }"
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

<script>
export default {

    async asyncData({ $content }) {
        const data = await $content('docs').fetch()
        console.log(data)

        return {
            data
        }
    }

}
</script>

<style scoped>
.card {
    border-radius: 8px;
}
</style>