import {
    idArg,
    queryType,
    stringArg
} from 'nexus';

export const Query = queryType({
    definition(t) {
        t.field('Weapon', {
            type: 'Weapon',
            nullable: true,
            args: {
                id: idArg()
            },
            resolve: (parent, {
                id
            }, ctx) => {
                return ctx.prisma.weapon.findOne({
                    where: {
                        id,
                    },
                })
            }
        })

        t.field('Armour', {
            type: 'Armour',
            nullable: true,
            args: {
                id: idArg()
            },
            resolve: (parent, {
                id
            }, ctx) => {
                return ctx.prisma.armour.findOne({
                    where: {
                        id,
                    },
                })
            }
        })

        t.field('Spell', {
            type: 'Spells',
            nullable: true,
            args: {
                id: idArg()
            },
            resolve: (parent, {
                id
            }, ctx) => {
                return ctx.prisma.spells.findOne({
                    where: {
                        id,
                    },
                })
            }
        })

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
            type: 'Spells',
            args: {
                searchString: stringArg({
                    nullable: true
                }),
            },
            resolve: (parent, {
                searchString
            }, ctx) => {
                return ctx.prisma.spells.findMany({
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