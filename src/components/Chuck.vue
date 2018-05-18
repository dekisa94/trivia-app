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
                <input class="form-control mb-2" 
                    type="text" 
                    placeholder="Enter joke category"
                    @input="setCategory"
                />
                <button class="btn btn-primary" @click="getNewJoke">Get new joke</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {store} from './../store'
export default {
    name: 'Chuck',
    computed:{
        ...mapGetters({
            randomJoke: 'getRandomJoke'
        })
    },
    methods:{
        ...mapMutations([
            'setJokeCategory'
        ]),
        getNewJoke(){
            store.dispatch('fetchRandomJoke', () => {})
        },
        setCategory(event){
            this.setJokeCategory(event.target.value)
        }
    },
    // created(){
    //     this.fetchRandomJoke()
    // },
    beforeRouteEnter(to, from, next) {
        store.dispatch('fetchRandomJoke', next)
    }
}
</script>