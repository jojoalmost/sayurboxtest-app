/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpeciesDetail
// ====================================================

export interface GetSpeciesDetail_species {
  __typename: "Species";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this species.
   */
  name: string | null;
  /**
   * The classification of this species, such as "mammal" or "reptile".
   */
  classification: string | null;
  /**
   * The designation of this species, such as "sentient".
   */
  designation: string | null;
  /**
   * The average height of this species in centimeters.
   */
  averageHeight: number | null;
  /**
   * The average lifespan of this species in years, null if unknown.
   */
  averageLifespan: number | null;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors: (string | null)[] | null;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors: (string | null)[] | null;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors: (string | null)[] | null;
  /**
   * The language commonly spoken by this species.
   */
  language: string | null;
}

export interface GetSpeciesDetail {
  species: GetSpeciesDetail_species | null;
}

export interface GetSpeciesDetailVariables {
  id: string;
}
