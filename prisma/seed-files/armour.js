export const armour = [
    {
        name: "Plate",
        category: "complete",
        hits: 14,
        strengthReq: 11,
        cost: 500,
        weight: 1000
    },
    {
        name: "Arming doublet",
        category: "parts",
        type: "chest",
        hits: 3,
        strengthReq: 1,
        cost: 40,
        weight: 75
    },
    {
        name: "Greaves (pair)",
        category: "parts",
        type: "limbs",
        hits: 2,
        strengthReq: 1,
        cost: 25,
        weight: 40,
        extraInfo: "Each greave can take 1 hit."
    }
]

// name        String
// category    String
// type        String?
// hits        Int
// strengthReq Int
// cost        Int
// weight      Int
// extraInfo   String ?