import {
    PrismaClient
} from '@prisma/client';
import {
    weapons
} from './seed-files/weapons.js';
import {
    armour
} from './seed-files/armour.js';
import {
    spells
} from './seed-files/spells.js';

const prismaClient = new PrismaClient();

const AllWeapons = weapons.map(weapon => {
    return {
        data: {
            name: weapon.name || "",
            category: weapon.category || "",
            type: weapon.type || "",
            dice: weapon.dice || 0,
            adds: weapon.adds || "",
            strengthReq: weapon.strengthReq || 0,
            dexReq: weapon.dexReq || 0,
            cost: weapon.cost || 0,
            weight: weapon.weight || 0,
            range: weapon.range || "",
            length: weapon.length || "",
            extraInfo: weapon.extraInfo || ""
        }
    };
});

const AllArmour = armour.map(armor => {
    return {
        data: {
            name: armor.name || "",
            category: armor.category || "",
            type: armor.type || "",
            hits: armor.hits || 0,
            strengthReq: armor.strengthReq || 0,
            cost: armor.cost || 0,
            weight: armor.weight || 0,
            extraInfo: armor.extraInfo || ""
        }
    };
});

const AllSpells = spells.map(spell => {
    return {
        data: {
            name: spell.name || "",
            level: spell.level || 0,
            description: spell.description || "",
            cost: spell.cost || "",
            range: spell.range || "",
            symbol: spell.symbol || ""
        }
    };
});

async function main() {
    try {
        for (let weapon of AllWeapons) {
            await prismaClient.weapon.create(weapon)
                .catch(err => console.log(`Error trying to create weapon: ${err} weapon ${weapon}`))
        }
        for (let armour of AllArmour) {
            await prismaClient.armour.create(armour)
                .catch(err => console.log(`Error trying to create weapon: ${err} armour ${armour}`))
        }
        for (let spell of AllSpells) {
            await prismaClient.spell.create(spell)
                .catch(err => console.log(`Error trying to create weapon: ${err} spell ${spell}`))
        }
    } catch (err) {
        console.log(err)
    }
}

main().catch(e => console.error(e)).finally(async () => {
    await prismaClient.disconnect()
})