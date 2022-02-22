/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPeopleDetail
// ====================================================

export interface GetPeopleDetail_person_homeworld {
  __typename: "Planet";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this planet.
   */
  name: string | null;
  /**
   * The diameter of this planet in kilometers.
   */
  diameter: number | null;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod: number | null;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod: number | null;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity: string | null;
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population: number | null;
  /**
   * The climates of this planet.
   */
  climates: (string | null)[] | null;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater: number | null;
}

export interface GetPeopleDetail_person_species {
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

export interface GetPeopleDetail_person {
  __typename: "Person";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this person.
   */
  name: string | null;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear: string | null;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor: string | null;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender: string | null;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor: string | null;
  /**
   * The height of the person in centimeters.
   */
  height: number | null;
  /**
   * The mass of the person in kilograms.
   */
  mass: number | null;
  /**
   * The skin color of this person.
   */
  skinColor: string | null;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string | null;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited: string | null;
  /**
   * A planet that this person was born on or inhabits.
   */
  homeworld: GetPeopleDetail_person_homeworld | null;
  /**
   * The species that this person belongs to, or null if unknown.
   */
  species: GetPeopleDetail_person_species | null;
}

export interface GetPeopleDetail {
  person: GetPeopleDetail_person | null;
}

export interface GetPeopleDetailVariables {
  id: string;
}
