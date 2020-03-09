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
        t.model.description()
        t.model.defaultCredits()
        t.model.courseCode()
        t.model.termsOffered()
    }
})

export const Models = [
    Weapon
]