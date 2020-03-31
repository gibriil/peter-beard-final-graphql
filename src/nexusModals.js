import {
    objectType
} from 'nexus'

const Weapon = objectType({
    name: 'Weapon',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.name()
        t.model.category()
        t.model.type()
        t.model.dice()
        t.model.adds()
        t.model.strengthReq()
        t.model.dexReq()
        t.model.cost()
        t.model.weight()
        t.model.range()
        t.model.length()
        t.model.extraInfo()
    }
})

const Armour = objectType({
    name: 'Armour',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.name()
        t.model.category()
        t.model.type()
        t.model.hits()
        t.model.strengthReq()
        t.model.cost()
        t.model.weight()
        t.model.extraInfo()
    }
})

const Spell = objectType({
    name: 'Spell',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.name()
        t.model.level()
        t.model.description()
        t.model.cost()
        t.model.range()
        t.model.symbol()
    }
})

export const Models = [
    Weapon,
    Armour,
    Spell
]