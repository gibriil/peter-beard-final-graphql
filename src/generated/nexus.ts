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
  ArmourCreateInput: { // input type
    category: string; // String!
    cost: number; // Int!
    createdAt?: any | null; // DateTime
    extraInfo: string; // String!
    hits: number; // Int!
    id?: string | null; // String
    name: string; // String!
    strengthReq: number; // Int!
    type: string; // String!
    updatedAt?: any | null; // DateTime
    weight: number; // Int!
  }
  ArmourUpdateInput: { // input type
    category?: string | null; // String
    cost?: number | null; // Int
    createdAt?: any | null; // DateTime
    extraInfo?: string | null; // String
    hits?: number | null; // Int
    id?: string | null; // String
    name?: string | null; // String
    strengthReq?: number | null; // Int
    type?: string | null; // String
    updatedAt?: any | null; // DateTime
    weight?: number | null; // Int
  }
  ArmourWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  SpellCreateInput: { // input type
    cost: string; // String!
    createdAt?: any | null; // DateTime
    description: string; // String!
    id?: string | null; // String
    level: number; // Int!
    name: string; // String!
    range: string; // String!
    symbol: string; // String!
    updatedAt?: any | null; // DateTime
  }
  SpellUpdateInput: { // input type
    cost?: string | null; // String
    createdAt?: any | null; // DateTime
    description?: string | null; // String
    id?: string | null; // String
    level?: number | null; // Int
    name?: string | null; // String
    range?: string | null; // String
    symbol?: string | null; // String
    updatedAt?: any | null; // DateTime
  }
  SpellWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  WeaponCreateInput: { // input type
    adds: string; // String!
    category: string; // String!
    cost: number; // Int!
    createdAt?: any | null; // DateTime
    dexReq: number; // Int!
    dice: number; // Int!
    extraInfo: string; // String!
    id?: string | null; // String
    length: string; // String!
    name: string; // String!
    range: string; // String!
    strengthReq: number; // Int!
    type: string; // String!
    updatedAt?: any | null; // DateTime
    weight: number; // Int!
  }
  WeaponUpdateInput: { // input type
    adds?: string | null; // String
    category?: string | null; // String
    cost?: number | null; // Int
    createdAt?: any | null; // DateTime
    dexReq?: number | null; // Int
    dice?: number | null; // Int
    extraInfo?: string | null; // String
    id?: string | null; // String
    length?: string | null; // String
    name?: string | null; // String
    range?: string | null; // String
    strengthReq?: number | null; // Int
    type?: string | null; // String
    updatedAt?: any | null; // DateTime
    weight?: number | null; // Int
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
  Spell: prisma.Spell;
  Weapon: prisma.Weapon;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ArmourCreateInput: NexusGenInputs['ArmourCreateInput'];
  ArmourUpdateInput: NexusGenInputs['ArmourUpdateInput'];
  ArmourWhereUniqueInput: NexusGenInputs['ArmourWhereUniqueInput'];
  SpellCreateInput: NexusGenInputs['SpellCreateInput'];
  SpellUpdateInput: NexusGenInputs['SpellUpdateInput'];
  SpellWhereUniqueInput: NexusGenInputs['SpellWhereUniqueInput'];
  WeaponCreateInput: NexusGenInputs['WeaponCreateInput'];
  WeaponUpdateInput: NexusGenInputs['WeaponUpdateInput'];
  WeaponWhereUniqueInput: NexusGenInputs['WeaponWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Armour: { // field return type
    category: string; // String!
    cost: number; // Int!
    createdAt: any; // DateTime!
    extraInfo: string; // String!
    hits: number; // Int!
    id: string; // String!
    name: string; // String!
    strengthReq: number; // Int!
    type: string; // String!
    updatedAt: any; // DateTime!
    weight: number; // Int!
  }
  Mutation: { // field return type
    createOneArmour: NexusGenRootTypes['Armour']; // Armour!
    createOneSpell: NexusGenRootTypes['Spell']; // Spell!
    createOneWeapon: NexusGenRootTypes['Weapon']; // Weapon!
    deleteOneArmour: NexusGenRootTypes['Armour'] | null; // Armour
    deleteOneSpell: NexusGenRootTypes['Spell'] | null; // Spell
    deleteOneWeapon: NexusGenRootTypes['Weapon'] | null; // Weapon
    updateOneArmour: NexusGenRootTypes['Armour'] | null; // Armour
    updateOneSpell: NexusGenRootTypes['Spell'] | null; // Spell
    updateOneWeapon: NexusGenRootTypes['Weapon'] | null; // Weapon
  }
  Query: { // field return type
    AllArmour: NexusGenRootTypes['Armour'][]; // [Armour!]!
    armour: NexusGenRootTypes['Armour'] | null; // Armour
    spell: NexusGenRootTypes['Spell'] | null; // Spell
    Spells: NexusGenRootTypes['Spell'][]; // [Spell!]!
    weapon: NexusGenRootTypes['Weapon'] | null; // Weapon
    Weapons: NexusGenRootTypes['Weapon'][]; // [Weapon!]!
  }
  Spell: { // field return type
    cost: string; // String!
    createdAt: any; // DateTime!
    description: string; // String!
    id: string; // String!
    level: number; // Int!
    name: string; // String!
    range: string; // String!
    symbol: string; // String!
    updatedAt: any; // DateTime!
  }
  Weapon: { // field return type
    adds: string; // String!
    category: string; // String!
    cost: number; // Int!
    createdAt: any; // DateTime!
    dexReq: number; // Int!
    dice: number; // Int!
    extraInfo: string; // String!
    id: string; // String!
    length: string; // String!
    name: string; // String!
    range: string; // String!
    strengthReq: number; // Int!
    type: string; // String!
    updatedAt: any; // DateTime!
    weight: number; // Int!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneArmour: { // args
      data: NexusGenInputs['ArmourCreateInput']; // ArmourCreateInput!
    }
    createOneSpell: { // args
      data: NexusGenInputs['SpellCreateInput']; // SpellCreateInput!
    }
    createOneWeapon: { // args
      data: NexusGenInputs['WeaponCreateInput']; // WeaponCreateInput!
    }
    deleteOneArmour: { // args
      where: NexusGenInputs['ArmourWhereUniqueInput']; // ArmourWhereUniqueInput!
    }
    deleteOneSpell: { // args
      where: NexusGenInputs['SpellWhereUniqueInput']; // SpellWhereUniqueInput!
    }
    deleteOneWeapon: { // args
      where: NexusGenInputs['WeaponWhereUniqueInput']; // WeaponWhereUniqueInput!
    }
    updateOneArmour: { // args
      data: NexusGenInputs['ArmourUpdateInput']; // ArmourUpdateInput!
      where: NexusGenInputs['ArmourWhereUniqueInput']; // ArmourWhereUniqueInput!
    }
    updateOneSpell: { // args
      data: NexusGenInputs['SpellUpdateInput']; // SpellUpdateInput!
      where: NexusGenInputs['SpellWhereUniqueInput']; // SpellWhereUniqueInput!
    }
    updateOneWeapon: { // args
      data: NexusGenInputs['WeaponUpdateInput']; // WeaponUpdateInput!
      where: NexusGenInputs['WeaponWhereUniqueInput']; // WeaponWhereUniqueInput!
    }
  }
  Query: {
    AllArmour: { // args
      searchString?: string | null; // String
    }
    armour: { // args
      where: NexusGenInputs['ArmourWhereUniqueInput']; // ArmourWhereUniqueInput!
    }
    spell: { // args
      where: NexusGenInputs['SpellWhereUniqueInput']; // SpellWhereUniqueInput!
    }
    Spells: { // args
      searchString?: string | null; // String
    }
    weapon: { // args
      where: NexusGenInputs['WeaponWhereUniqueInput']; // WeaponWhereUniqueInput!
    }
    Weapons: { // args
      searchString?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Armour" | "Mutation" | "Query" | "Spell" | "Weapon";

export type NexusGenInputNames = "ArmourCreateInput" | "ArmourUpdateInput" | "ArmourWhereUniqueInput" | "SpellCreateInput" | "SpellUpdateInput" | "SpellWhereUniqueInput" | "WeaponCreateInput" | "WeaponUpdateInput" | "WeaponWhereUniqueInput";

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