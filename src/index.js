import {mario, peach, yoshi, bowser, luigi, donkey} from './jogadores.js'
import { rollDice, corrida } from './funcoes.js'

(async function main(){
    corrida(mario, bowser)
})()

// Fazer isso de colocar parênteses na função e depois
// faz com que ela seja um função auto-invacável