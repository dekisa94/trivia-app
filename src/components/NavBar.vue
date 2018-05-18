<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link class="navbar-brand" to="/">Trivia-app</router-link>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Page2</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>

</style>
