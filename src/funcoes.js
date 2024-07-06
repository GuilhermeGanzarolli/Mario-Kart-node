let rodadas = 0

export async function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) +1
    return diceValue
}


export function corrida(participante1, participante2) {
    console.log(`🏁🚨 Corrida entre ${participante1.nome} e ${participante2.nome} 🚨🏁`)
    while (rodadas<6) {
        console.log(rollDice())
        console.log(rollDice())
        console.log(`
         ========== Rodada ${rodadas+1} ==========
         Pista de -> 
         Desempenho de ${participante1.nome} -> 
         Desempenho de ${participante2.nome} -> 
        `)
        rodadas++
    }
    console.log('Programa Finalizado')
}