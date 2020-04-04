import {
    idArg,
    queryType,
    stringArg
} from 'nexus';

export const Query = queryType({
    definition(t) {

        t.crud.weapon()
        t.crud.armour()
        t.crud.spell()

        t.list.field('Weapons', {
            type: 'Weapon',
            args: {
                searchString: stringArg({
                    nullable: true
                }),
            },
            resolve: (parent, {
                searchString
            }, ctx) => {
                return ctx.prisma.weapon.findMany({
                    where: {
                        OR: [{
                                name: {
                                    contains: searchString
                                }
                            },
                            {
                                category: {
                                    contains: searchString
                                }
                            },
                            {
                                type: {
                                    contains: searchString
                                }
                            }
                        ],
                    },
                })
            }
        })

        t.list.field('AllArmour', {
            type: 'Armour',
            args: {
                searchString: stringArg({
                    nullable: true
                }),
            },
            resolve: (parent, {
                searchString
            }, ctx) => {
                return ctx.prisma.armour.findMany({
                    where: {
                        OR: [{
                            name: {
                                contains: searchString
                            }
                        }],
                    },
                })
            }
        })

        t.list.field('Spells', {
            type: 'Spell',
            args: {
                searchString: stringArg({
                    nullable: true
                }),
            },
            resolve: (parent, {
                searchString
            }, ctx) => {
                return ctx.prisma.spell.findMany({
                    where: {
                        OR: [{
                            name: {
                                contains: searchString
                            }
                        }],
                    },
                })
            }
        })

    }
});