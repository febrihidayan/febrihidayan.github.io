<template>
    <article class="content">
        <h1 class="font-bold text-2xl mb-3">{{ data.title }}</h1>
        <ContentRenderer :value="data" />
    </article>
</template>


<script setup>
const data = await queryContent('about').findOne()

console.log(data)
</script>