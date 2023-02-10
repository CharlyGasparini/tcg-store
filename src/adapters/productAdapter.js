export const createAdaptedProductFromFirestore = (doc) => {
    
    const data = doc.data();
    const productAdapted = {
        id: doc.id,
        name: data.name,
        images: data.images,
        supertype: data.supertype,
        subtypes: data.subtypes,
        types: data.types,
        price: data.price,
        hp: data.hp,
        rules: data.rules,
        abilities: data.abilities,
        attacks: data.attacks,
        legalities: data.legalities,
        weaknesses: data.weaknesses,
        resistances: data.resistances,
        retreatCost: data.retreatCost,
        stock: data.stock,
        set: data.set
    }

    return productAdapted
}