export const weapons = [
    {
        name: "Great sword (6')",
        category: "swords",
        type: "Class I: Straight Swords",
        dice: 6,
        strengthReq: 21,
        dexReq: 18,
        cost: 120,
        weight: 170
    },
    {
        name: "Two-handed broadsword (5')",
        category: "swords",
        type: "Class I: Straight Swords",
        dice: 5,
        adds: 2,
        strengthReq: 17,
        dexReq: 14,
        cost: 110,
        weight: 160
    },
    {
        name: "Prodd (pellet firing)",
        category: "Projectile Weapons",
        type: "Class I: Arbalests & Crossbows",
        dice: 3,
        strengthReq: 16,
        dexReq: 10,
        cost: 200,
        weight: 100,
        range: "30 yards",
        extraInfo: "The prodd fires small stones."
    }
]

// {
// name        String
// category    String
// type        String
// dice        Int
// adds        Int ?
// strengthReq Int
// dexReq      Int
// cost        Int
// weight      Int
// range       String ?
// length      String ?
// extraInfo   String ?
// }