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
                                description: {
                                    contains: searchString
                                }
                            }
                        ],
                    },
                })
            }
        })

    }
});