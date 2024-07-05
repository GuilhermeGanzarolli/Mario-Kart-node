import {mario, peach, yoshi, bowser, luigi, donkey} from './jogadores.js'
import { rollDice } from './funcoes.js'

(async function main(){
    console.log(mario.nome)
    console.log(await rollDice())
})()

// Fazer isso de colocar parênteses na função e depois
// faz com que ela seja um função auto-invacável