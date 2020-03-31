import {
    idArg,
    mutationType,
    stringArg,
    intArg
} from 'nexus';

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        t.crud.createOneWeapon()
        t.crud.updateOneWeapon()
        t.crud.deleteOneWeapon()

        t.crud.createOneArmour()
        t.crud.updateOneArmour()
        t.crud.deleteOneArmour()

        t.crud.createOneSpell();
        t.crud.updateOneSpell()
        t.crud.deleteOneSpell()
    }
});