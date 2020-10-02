<template>
    <section class="section">
        <div class="container">
            <nav class="navbar">
                <div class="navbar-brand">
                    <NuxtLink
                        to="/"
                        class="navbar-item is-tab">
                        <strong>Febri Hidayan</strong>
                    </NuxtLink>
                    <a
                        @click="isActive = !isActive"
                        role="button"
                        :class="[`navbar-burger burger`, {
                            'is-active': isActive
                        }]"
                        aria-label="menu"
                        aria-expanded="false"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div :class="[`navbar-menu`, {
                    'is-active': isActive
                }]">
                    <div class="navbar-end">
                        <NuxtLink
                            :to="{
                                name: 'docs'
                            }"
                            class="navbar-item is-tab"
                        >
                            Docs
                        </NuxtLink>
                        <NuxtLink
                            :to="{
                                name: 'blog'
                            }"
                            class="navbar-item is-tab"
                        >
                            Blog
                        </NuxtLink>
                        <NuxtLink
                            :to="{
                                name: 'story'
                            }"
                            class="navbar-item is-tab"
                        >
                            Story
                        </NuxtLink>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        isActive: false
    })
}
</script>