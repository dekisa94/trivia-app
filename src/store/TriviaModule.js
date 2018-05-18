import {TriviaService} from './../service/TriviaService'

export const TriviaModule = {
    state:{
        trivias: []
    },
    getters:{
        getTrivias(state){
            return state.trivias
        }
    },
    mutations:{
        setTrivias(state, trivias){
            state.trivias = trivias
        }
    },
    actions:{
        fetchTrivias(store){
            TriviaService.getRandomTrivias().then(({data}) => {
                store.commit('setTrivias', data)
            })
        }
    }
}

