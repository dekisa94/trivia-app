<template>
    <div class="container">
        <p>{{randomJoke}}</p>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'Chuck',
    computed:{
        ...mapGetters({
            randomJoke: 'getRandomJoke'
        })
    },
    methods:{
        ...mapActions([
            'fetchRandomJoke'
        ])
    },
    created(){
        this.fetchRandomJoke()
    }
}
</script>