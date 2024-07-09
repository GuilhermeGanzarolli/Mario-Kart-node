let rodadas = 0

export async function rollDice(valor) {
    const diceValue = Math.floor(Math.random() * valor) +1
    return diceValue
}

export async function tipoDePista(){
    const valorPista = await rollDice(3)

    if(valorPista===1){
        return 'RETA'
    }else if(valorPista===2){
        return 'CURVA'
    }else{
        return 'CONFRONTO'
    }
}

export async function selecionarHabilidade(jogador,tipoPista) {
    if(tipoPista==='RETA'){
        return jogador.velocidade
    }else if(tipoPista==='CURVA'){
        return jogador.manobrabilidade
    }else if(tipoPista==='CONFRONTO'){
        return jogador.poder
    }
}


export async function corrida(participante1, participante2) {
    console.log(`🏁🚨 Corrida entre ${participante1.nome} e ${participante2.nome} 🚨🏁`)
    while (rodadas<6) {
        const resultado1 = await rollDice(6);
        const resultado2 = await rollDice(6);
        const pista = await tipoDePista()
        const habilidade1 = await selecionarHabilidade(participante1,pista)
        const habilidade2 = await selecionarHabilidade(participante2,pista)
        const resultadoF1 = resultado1+habilidade1
        const resultadoF2 = resultado2+habilidade2
        console.log(`
         ========== Rodada ${rodadas+1} ==========
         Pista de -> ${pista}
         Desempenho de ${participante1.nome} -> ${resultado1} + ${habilidade1} = ${resultado1+habilidade1}
         Desempenho de ${participante2.nome} -> ${resultado2} + ${habilidade2} = ${resultado2+habilidade2}
        `)
        if (resultadoF1>resultadoF2) {
            console.log(`${participante1.nome} ganhou +1 ponto!`)
            participante1.pontos +=1
        } else if (resultadoF1<resultadoF2){
            console.log(`${participante2.nome} ganhou! +1 ponto!`)
            participante2.pontos +=1
        }else{
            console.log('Deu empate!!!')
        }
        rodadas++
    }
    console.log(`================================
        Partida finalizada 
    ${participante1.nome}--> ${participante1.pontos}
    ${participante2.nome}--> ${participante2.pontos}
    `)
    if (participante1.pontos>participante2.pontos){
        console.log(participante1.nome + ' ganhou!')
    }else if(participante1.pontos<participante2.pontos){
        console.log(participante2.nome + ' ganhou!')
    }else if(participante1.pontos==participante2.pontos){
        console.log('Empate')
    }else{
        console.log('Erro!')
    }
    console.log('Programa Finalizado')
}