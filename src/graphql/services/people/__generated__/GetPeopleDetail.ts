/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPeopleDetail
// ====================================================

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
