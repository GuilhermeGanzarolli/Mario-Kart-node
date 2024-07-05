export class Player{
    constructor(nome,velocidade,manobrabilidade,poder){
        this.nome = nome
        this.velocidade = velocidade
        this.manobrabilidade = manobrabilidade
        this.poder = poder
        this.pontos = 0
    } 
}

export const mario = new Player('Mario',4,3,3)
export const peach = new Player('Peach',3,4,2)
export const yoshi = new Player('Yoshi',2,4,3)
export const bowser = new Player('Bowser',5,2,5)
export const luigi = new Player('Luigi',3,4,4)
export const donkey = new Player('Donkey',2,2,5)


