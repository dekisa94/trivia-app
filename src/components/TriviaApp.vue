<template>
  <div class="container">
    <ul>
      <li v-for="trivia in trivias"
        :key="trivia.id"
        @click="toggleTrivia(trivia.id)">
        {{ trivia.question }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TriviaApp',
  data(){
    return{
      selectedTriviasIds: []
    }
  },
  computed:{
    ...mapGetters({
      trivias: 'getTrivias'
    })
  },
  methods:{
    ...mapActions([
      'fetchTrivias'
    ]),
    toggleTrivia(triviaId){
      let triviaIdIndex = this.selectedTriviasIds.indexOf(triviaId)
      let isSelectedTriviaId = triviaIdIndex > -1
      if (isSelectedTriviaId){
        return this.selectedTriviasIds.splice(triviaIdIndex, 1)
      }
      this.selectedTriviasIds.push(triviaId)
      
    }
  },
  created(){
    this.fetchTrivias()
  }
}
</script>