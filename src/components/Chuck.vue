<template>
    <div class="container">
        <div class="card" style="width: 18rem;">
            <img 
            class="card-img-top" 
            :src="randomJoke.iconUrl" 
            alt="Card image cap">
            <div class="card-body">
                <p class="card-text"
                v-text="randomJoke.value">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {store} from './../store'
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
    // created(){
    //     this.fetchRandomJoke()
    // },
    beforeRouteEnter(to, from, next) {
        store.dispatch('fetchRandomJoke', next)
    }
}
</script>