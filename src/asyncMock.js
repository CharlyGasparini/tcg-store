const products = [
    {

        id:'1', 
        title: 'Serperior V-ASTRO',
        type: 'p', 
        description: {
            ps: '270',
            powers: [
                {
                    name: '[Poder V-ASTRO] Astro Bobina',
                    cost: 'p',
                    damage: '60x',
                    effect: 'Este ataque hace 60 puntos de daño por cada Energía unida a este Pokémon. Cambia este Pokémon por 1 de tus Pokémon en Banca. (No puedes usar más de 1 Poder V-ASTRO en una partida).'
                }
            ],
            attacks: [
                {
                    name: 'Batidora Realeza',
                    cost: 'pii',
                    damage: '190',
                    effect: 'Puedes mover cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees.'
                }
            ],
            weakness: 'fx2',
            resistance: '',
            retreatCost: '',
        }, 
        price: 150, 
        pictureUrl: './images/serperior-vastro.png' 
    },
    {
        id:'2', 
        title: 'Reshiram',
        type: 'f', 
        description: {
            ps: '130',
            powers: [],
            attacks: [
                {
                    name: 'Enfado',
                    cost: 'ii',
                    damage: '20+',
                    effect: 'Hace 10 puntos de daño más por cada contador de daño de este Pokémon.'
                },
                {
                    name: 'Llama Azul',
                    cost: 'ffi',
                    damage: '120',
                    effect: 'Descarta 2 Energías f unidas a este Pokémon.'
                }
            ],
            weakness: 'ax2',
            resistance: '',
            retreatCost: 'ii',
        }, 
        price: 25, 
        pictureUrl: './images/reshiram.png' 
    },
    {
        id:'3', 
        title: 'Pikachu',
        type: 'r', 
        description: {
            ps: '60',
            powers: [
                {
                    name: 'Escudo Pika',
                    cost: '',
                    damage: '',
                    effect: 'Este Pokémon no puede pasar a estar Paralizado.'
                }
            ],
            attacks: [
                {
                    name: 'Impacto Estático',
                    cost: 'r',
                    damage: '10',
                    effect: ''
                }
            ],
            weakness: 'lx2',
            resistance: 'm-20',
            retreatCost: 'i',
        }, 
        price: 5, 
        pictureUrl: './images/pikachu.png' 
    },
    {
        id:'4', 
        title: 'Mewtwo EX',
        type: 'q', 
        description: {
            ps: '170',
            powers: [],
            attacks: [
                {
                    name: 'Bola X',
                    cost: 'ii',
                    damage: '20x',
                    effect: 'Hace 20 puntos de daño por cada Energía unida a estePokémon y al Pokémon Defensor.'
                },
                {
                    name: 'Guia Psi',
                    cost: 'qqi',
                    damage: '120',
                    effect: 'Descarta una Energía unida a este Pokémon'
                }
            ],
            weakness: 'qx2',
            resistance: '',
            retreatCost: 'ii',
        }, 
        price: 70, 
        pictureUrl: './images/mewtwo-ex.png' 
    },
    {
        id:'5', 
        title: 'Altaria',
        type: 'd', 
        description: {
            ps: '70',
            powers: [
                {
                    name: 'Canción Bélica',
                    cost: '',
                    damage: '',
                    effect: 'Los ataques de tus Pokémon Dragon hacen 20 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).'
                }
            ],
            attacks: [
                {
                    name: 'Planeo',
                    cost: 'ami',
                    damage: '40',
                    effect: ''
                }
            ],
            weakness: 'dx2',
            resistance: '',
            retreatCost: 'i',
        }, 
        price: 40, 
        pictureUrl: './images/altaria.png' 
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}