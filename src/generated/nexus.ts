/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ArmourWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  SpellsWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  WeaponWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Armour: prisma.Armour;
  Mutation: {};
  Query: {};
  Spells: prisma.Spells;
  Weapon: prisma.Weapon;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ArmourWhereUniqueInput: NexusGenInputs['ArmourWhereUniqueInput'];
  SpellsWhereUniqueInput: NexusGenInputs['SpellsWhereUniqueInput'];
  WeaponWhereUniqueInput: NexusGenInputs['WeaponWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Armour: { // field return type
    category: string; // String!
    cost: number; // Int!
    createdAt: any; // DateTime!
    extraInfo: string | null; // String
    hits: number; // Int!
    id: string; // String!
    name: string; // String!
    strengthReq: number; // Int!
    type: string | null; // String
    updatedAt: any; // DateTime!
    weight: number; // Int!
  }
  Mutation: { // field return type
    deleteOneArmour: NexusGenRootTypes['Armour'] | null; // Armour
    deleteOneSpells: NexusGenRootTypes['Spells'] | null; // Spells
    deleteOneWeapon: NexusGenRootTypes['Weapon'] | null; // Weapon
  }
  Query: { // field return type
    AllArmour: NexusGenRootTypes['Armour'][]; // [Armour!]!
    Armour: NexusGenRootTypes['Armour'] | null; // Armour
    Spell: NexusGenRootTypes['Spells'] | null; // Spells
    Spells: NexusGenRootTypes['Spells'][]; // [Spells!]!
    Weapon: NexusGenRootTypes['Weapon'] | null; // Weapon
    Weapons: NexusGenRootTypes['Weapon'][]; // [Weapon!]!
  }
  Spells: { // field return type
    cost: string; // String!
    createdAt: any; // DateTime!
    description: string; // String!
    id: string; // String!
    level: number; // Int!
    name: string; // String!
    range: string | null; // String
    symbol: string | null; // String
    updatedAt: any; // DateTime!
  }
  Weapon: { // field return type
    adds: number | null; // Int
    category: string; // String!
    cost: number; // Int!
    createdAt: any; // DateTime!
    dexReq: number; // Int!
    dice: number; // Int!
    extraInfo: string | null; // String
    id: string; // String!
    length: string | null; // String
    name: string; // String!
    range: string | null; // String
    strengthReq: number; // Int!
    type: string; // String!
    updatedAt: any; // DateTime!
    weight: number; // Int!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteOneArmour: { // args
      where: NexusGenInputs['ArmourWhereUniqueInput']; // ArmourWhereUniqueInput!
    }
    deleteOneSpells: { // args
      where: NexusGenInputs['SpellsWhereUniqueInput']; // SpellsWhereUniqueInput!
    }
    deleteOneWeapon: { // args
      where: NexusGenInputs['WeaponWhereUniqueInput']; // WeaponWhereUniqueInput!
    }
  }
  Query: {
    AllArmour: { // args
      searchString?: string | null; // String
    }
    Armour: { // args
      id?: string | null; // ID
    }
    Spell: { // args
      id?: string | null; // ID
    }
    Spells: { // args
      searchString?: string | null; // String
    }
    Weapon: { // args
      id?: string | null; // ID
    }
    Weapons: { // args
      searchString?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Armour" | "Mutation" | "Query" | "Spells" | "Weapon";

export type NexusGenInputNames = "ArmourWhereUniqueInput" | "SpellsWhereUniqueInput" | "WeaponWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}