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

async function main() {
    try {
        for (let bob of weapons) {
            await prismaClient.weapon.create({
                    data: bob
                })
                .catch(err => console.log(`Error trying to create weapon: ${err} weapon ${bob}`))
        }
        for (let armor of armour) {
            await prismaClient.armour.create({
                    data: armor
                })
                .catch(err => console.log(`Error trying to create weapon: ${err} armour ${armor}`))
        }
        for (let spell of spells) {
            await prismaClient.spells.create({
                    data: weapon
                })
                .catch(err => console.log(`Error trying to create weapon: ${err} spell ${spell}`))
        }
    } catch (err) {
        console.log(err)
    }
}

main().catch(e => console.error(e)).finally(async () => {
    await prismaClient.disconnect()
})