const products = [
    {
        "id": "base1-4",
        "name": "Charizard",
        "supertype": "Pokémon",
        "subtypes": [
          "Stage 2"
        ],
        "level": "76",
        "hp": "120",
        "types": [
          "Fire"
        ],
        "evolvesFrom": "Charmeleon",
        "abilities": [
          {
            "name": "Energy Burn",
            "text": "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
          }
        ],
        "attacks": [
          {
            "name": "Fire Spin",
            "cost": [
              "Fire",
              "Fire",
              "Fire",
              "Fire"
            ],
            "convertedEnergyCost": 4,
            "damage": "100",
            "text": "Discard 2 Energy cards attached to Charizard in order to use this attack."
          }
        ],
        "weaknesses": [
          {
            "type": "Water",
            "value": "×2"
          }
        ],
        "resistances": [
          {
            "type": "Fighting",
            "value": "-30"
          }
        ],
        "retreatCost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedRetreatCost": 3,
        "number": "4",
        "artist": "Mitsuhiro Arita",
        "rarity": "Rare Holo",
        "flavorText": "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.",
        "nationalPokedexNumbers": [
          6
        ],
        "legalities": {
          "unlimited": "Legal"
        },
        "images": {
          "small": "https://images.pokemontcg.io/base1/4.png",
          "large": "https://images.pokemontcg.io/base1/4_hires.png"
        },
        "price": 300
    },

    {
    "id": "xy1-78",
    "name": "Yveltal",
    "supertype": "Pokémon",
    "subtypes": [
        "Basic"
    ],
    "hp": "130",
    "types": [
        "Darkness"
    ],
    "attacks": [
        {
        "name": "Oblivion Wing",
        "cost": [
            "Darkness"
        ],
        "convertedEnergyCost": 1,
        "damage": "30",
        "text": "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon."
        },
        {
        "name": "Darkness Blade",
        "cost": [
            "Darkness",
            "Darkness",
            "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "100",
        "text": "Flip a coin. If tails, this Pokémon can't attack during your next turn."
        }
    ],
    "weaknesses": [
        {
        "type": "Lightning",
        "value": "×2"
        }
    ],
    "resistances": [
        {
        "type": "Fighting",
        "value": "-20"
        }
    ],
    "retreatCost": [
        "Colorless",
        "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "78",
    "artist": "5ban Graphics",
    "rarity": "Rare",
    "flavorText": "When this legendary Pokémon's wings and tail feathers spread wide and glow red, it absorbs the life force of all living creatures.",
    "nationalPokedexNumbers": [
        717
    ],
    "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
    },
    "images": {
        "small": "https://images.pokemontcg.io/xy1/78.png",
        "large": "https://images.pokemontcg.io/xy1/78_hires.png"
    },
    "price": 100
    },

    {
        "id": "xyp-XY84",
        "name": "Pikachu-EX",
        "supertype": "Pokémon",
        "subtypes": [
          "Basic",
          "EX"
        ],
        "hp": "130",
        "types": [
          "Lightning"
        ],
        "evolvesTo": [
          "Raichu"
        ],
        "rules": [
          "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
        ],
        "attacks": [
          {
            "name": "Iron Tail",
            "cost": [
              "Colorless"
            ],
            "convertedEnergyCost": 1,
            "damage": "30×",
            "text": "Flip a coin until you get tails. This attack does 30 damage times the number of heads."
          },
          {
            "name": "Overspark",
            "cost": [
              "Lightning",
              "Colorless",
              "Colorless"
            ],
            "convertedEnergyCost": 3,
            "damage": "50×",
            "text": "Discard all Lightning Energy attached to this Pokémon. This attack does 50 damage times the number of Energy cards you discarded."
          }
        ],
        "weaknesses": [
          {
            "type": "Fighting",
            "value": "×2"
          }
        ],
        "resistances": [
          {
            "type": "Metal",
            "value": "-20"
          }
        ],
        "retreatCost": [
          "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "XY84",
        "artist": "Hitoshi Ariga",
        "rarity": "Promo",
        "nationalPokedexNumbers": [
          25
        ],
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "images": {
          "small": "https://images.pokemontcg.io/xyp/XY84.png",
          "large": "https://images.pokemontcg.io/xyp/XY84_hires.png"
        },
        "price": 150
    },

    {
        "id": "swsh10-46",
        "name": "Radiant Greninja",
        "supertype": "Pokémon",
        "subtypes": [
          "Basic",
          "Radiant"
        ],
        "hp": "130",
        "types": [
          "Water"
        ],
        "rules": [
          "Radiant Pokémon Rule: You can't have more than 1 Radiant Pokémon in your deck."
        ],
        "abilities": [
          {
            "name": "Concealed Cards",
            "text": "You must discard an Energy card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
            "type": "Ability"
          }
        ],
        "attacks": [
          {
            "name": "Moonlight Shuriken",
            "cost": [
              "Water",
              "Water",
              "Colorless"
            ],
            "convertedEnergyCost": 3,
            "damage": "",
            "text": "Discard 2 Energy from this Pokémon. This attack does 90 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
          }
        ],
        "weaknesses": [
          {
            "type": "Lightning",
            "value": "×2"
          }
        ],
        "retreatCost": [
          "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "46",
        "artist": "Souichirou Gunjima",
        "rarity": "Radiant Rare",
        "flavorText": "It appears and vanishes with a ninja's grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.",
        "nationalPokedexNumbers": [
          658
        ],
        "legalities": {
          "unlimited": "Legal",
          "standard": "Legal",
          "expanded": "Legal"
        },
        "regulationMark": "F",
        "images": {
          "small": "https://images.pokemontcg.io/swsh10/46.png",
          "large": "https://images.pokemontcg.io/swsh10/46_hires.png"
        },
        "price": 75
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsDetail = () => {
    
}