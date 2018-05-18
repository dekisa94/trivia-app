import { ChuckService } from './../service/ChuckService'

export const ChuckModule = {
    state:{
        randomJoke: ''
    },
    getters:{
        getRandomJoke(state){
            return state.randomJoke.value
        }
    },
    mutations:{
        setRandomJoke(state, joke){
            state.randomJoke = joke
        }
    },
    actions:{
        fetchRandomJoke(store){
            ChuckService.getRandomJoke().then((joke) => {
                store.commit('setRandomJoke', joke)
            })
        }
    }
}