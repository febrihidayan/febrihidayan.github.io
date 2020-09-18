<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand">
                <NuxtLink to="/" class="navbar-item">Febri Hidayan</NuxtLink>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" id="navbarBasicExample">
                <div class="navbar-start">
                    <NuxtLink to="blog" class="navbar-item is-tab">Blog</NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>