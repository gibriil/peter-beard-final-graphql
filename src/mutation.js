import {
    idArg,
    mutationType,
    stringArg
} from 'nexus';

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        t.crud.deleteOneWeapon()
        t.crud.deleteOneArmour()
        t.crud.deleteOneSpells()
    }
});