<template>
    <header class="container mx-auto max-w-2xl">
        <nav class="flex flex-row my-5">
            <div class="basic-1">
                <NuxtLink to="/">
                    <strong>Febri Hidayan</strong>
                </NuxtLink>
            </div>
            <div class="basic-0 ml-auto">
                <NuxtLink :to="{ name: 'docs' }"
                    class="px-4">
                    Docs
                </NuxtLink>
                <NuxtLink :to="{ name: 'blog' }"
                    class="px-4">
                    Blog
                </NuxtLink>
                <NuxtLink :to="{ name: 'story' }"
                    class="px-4">
                    Story
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data: () => ({
        isActive: false
    })
}
</script>