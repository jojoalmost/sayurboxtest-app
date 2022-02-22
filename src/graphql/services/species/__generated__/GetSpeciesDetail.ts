/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpeciesDetail
// ====================================================

export interface GetSpeciesDetail_species_personConnection_people {
  __typename: "Person";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this person.
   */
  name: string | null;
}

export interface GetSpeciesDetail_species_personConnection {
  __typename: "SpeciesPeopleConnection";
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: number | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people: (GetSpeciesDetail_species_personConnection_people | null)[] | null;
}

export interface GetSpeciesDetail_species_filmConnection_films {
  __typename: "Film";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The title of this film.
   */
  title: string | null;
}

export interface GetSpeciesDetail_species_filmConnection {
  __typename: "SpeciesFilmsConnection";
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: number | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (GetSpeciesDetail_species_filmConnection_films | null)[] | null;
}

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
  personConnection: GetSpeciesDetail_species_personConnection | null;
  filmConnection: GetSpeciesDetail_species_filmConnection | null;
}

export interface GetSpeciesDetail {
  species: GetSpeciesDetail_species | null;
}

export interface GetSpeciesDetailVariables {
  id: string;
}
