const products = [
    {
        "id": "base1-4",
        "name": "Charizard",
        "supertype": "Pokémon",
        "subtypes": [
          "Stage 2"
        ],
        "hp": "120",
        "types": [
          "Fire"
        ],
        "evolvesFrom": "Charmeleon",
        "rules": [],
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
      "id": "xyp-XY08",
      "name": "Yveltal-EX",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "EX"
      ],
      "hp": "170",
      "types": [
        "Darkness"
      ],
      "rules": [
        "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
      ],
      "abilities": [],
      "attacks": [
        {
          "name": "Evil Ball",
          "cost": [
            "Darkness",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20+",
          "text": "This attack does 20 more damage times the amount of Energy attached to both Active Pokémon."
        },
        {
          "name": "Y Cyclone",
          "cost": [
            "Darkness",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "90",
          "text": "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
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
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xyp/XY08.png",
        "large": "https://images.pokemontcg.io/xyp/XY08_hires.png"
      },"price": 200
    },

    {
      "id": "base6-100",
      "name": "Full Heal Energy",
      "supertype": "Energy",
      "subtypes": [
        "Special"
      ],
      "rules": [
        "If you play this card from your hand, the Pokémon you attach it to is no longer affected by a Special Condition. Full Heal Energy provides Colorless energy. (Doesn't count as a basic Energy card.)"
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base6/100.png",
        "large": "https://images.pokemontcg.io/base6/100_hires.png"
      },
      "price": 3
    },

    {
      "id": "ex16-80",
      "name": "Professor Birch",
      "supertype": "Trainer",
      "subtypes": [
        "Supporter"
      ],
      "rules": [
        "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card.",
        "Draw cards from your deck until you have 6 cards in your hand."
      ],
      "images": {
        "small": "https://images.pokemontcg.io/ex16/80.png",
        "large": "https://images.pokemontcg.io/ex16/80_hires.png"
      },
      "legalities": {
        "unlimited": "Legal"
      },
      "price": 10
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}