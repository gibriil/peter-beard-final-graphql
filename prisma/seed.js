import { PrismaClient } from '@prisma/client';
import weapons from './seed-files/weapons.js';
import armour from './seed-files/armour.js';
import spells from './seed-files/spells.js';

async function main() {
    try {
        for (let weapon of weapons) {
            await prismaClient.weapon.create(weapon)
                .catch(err => console.log(`Error trying to create weapon: ${err} weapon ${weapon}`))
        }
        for (let armor of armour) {
            await prismaClient.armour.create(armor)
                .catch(err => console.log(`Error trying to create weapon: ${err} armour ${armor}`))
        }
        for (let spell of spells) {
            await prismaClient.spells.create(weapon)
                .catch(err => console.log(`Error trying to create weapon: ${err} spell ${spell}`))
        }
    } catch (err) {
        console.log(err)
    }
}

main().catch(e => console.error(e)).finally(async () => {
    await prismaClient.disconnect()
})