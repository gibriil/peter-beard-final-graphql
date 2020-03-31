export const spells = [
    {
        name: "Will-o-Wisp",
        level: 1,
        description: "Lights up finger or staff in lieu of torch, 1 candlepower worth. Cannot be projected onto anything, but can throw up to 225' away. Must be renewed each turn for continuing effect.",
        cost: "1"
    },
    {
        name: "Take That, You Fiend",
        level: 1,
        description: "Uses IQ as a weapon against foes, inflicting hits equal to the IQ of the caster. On higher levels, multiply the IQ rating by the level of the spell to get total hits inflicted. It is a singular spell and must be directed against a single foe. It has no effect upon inanimate objects.",
        cost: "6",
        range: "250'",
        symbol: "circle"
    }
]

// name        String
// level       Int
// description String
// cost        String
// range       String ?
// symbol      String ?