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
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu" id="navbarBasicExample">
                    <div class="navbar-end">
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
                                name: 'packages'
                            }"
                            class="navbar-item is-tab"
                        >
                            Packages
                        </NuxtLink>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>