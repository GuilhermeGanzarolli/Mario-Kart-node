let rodadas = 0

export function rollDice(valor) {
    const diceValue = Math.floor(Math.random() * valor) +1
    return diceValue
}

export function tipoDePista(){
    const valorPista = rollDice(3)

    switch (valorPista) {
        case 1:
            return 'RETA'

        case 2:
            return 'CURVA'

        case 3:
            return 'CONFRONTO'
    
        default:
            break;
    }

}

export function selecionarHabilidade(jogador,tipoPista) {
    if(tipoPista==='RETA'){
        return jogador.velocidade
    }else if(tipoPista==='CURVA'){
        return jogador.manobrabilidade
    }else if(tipoPista==='CONFRONTO'){
        return jogador.poder
    }
}

export function ganhouRodada(jogador1, n1, jogador2, n2, pista){
    if(pista=='CONFRONTO'){
        if (n1>n2) {
            console.log(`${jogador2.nome} perdeu -1 ponto!`)
            jogador2.pontos-=1
        } else if (n1<n2){
            console.log(`${jogador1.nome}  perdeu -1 ponto!`)
            jogador1.pontos-=1
        }else{
            console.log('Esta rodada deu empate!!!')
        }
    }else{
        if (n1>n2) {
            console.log(`${jogador1.nome} ganhou +1 ponto!`)
            jogador1.pontos+=1
        } else if (n1<n2){
            console.log(`${jogador2.nome} ganhou! +1 ponto!`)
            jogador2.pontos+=1
        }else{
            console.log('Esta rodada deu empate!!!')
        }
    }
}

export function ganhouPartida(Player1,Player2) {
    if(Player1.pontos>Player2.pontos){

        console.log(`✅🏁 ${Player1.nome.toUpperCase()} é o grande campeão da partida!! 🏁✅`)

    } else if(Player1.pontos<Player2.pontos){

        console.log(`✅🏁 ${Player2.nome.toUpperCase()} é o grande campeão da partida!! 🏁✅`)

    } else{
        console.log(`❌ Empate entre os dois competidores!! ❌`)
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
         ========== 🚦 Rodada ${rodadas+1} 🚦 ==========
         Pista de -> ${pista}
         Desempenho de ${participante1.nome} -> ${resultado1} + ${habilidade1} = ${resultadoF1}
         Desempenho de ${participante2.nome} -> ${resultado2} + ${habilidade2} = ${resultadoF2}
        `)

        await ganhouRodada(participante1,resultadoF1,participante2,resultadoF2,pista)
        rodadas++
    }
    console.log(`================================
        Partida finalizada 
    ${participante1.nome}--> ${participante1.pontos}
    ${participante2.nome}--> ${participante2.pontos}
    `)
    
    await ganhouPartida(participante1,participante2)

    console.log('Programa Finalizado')
}