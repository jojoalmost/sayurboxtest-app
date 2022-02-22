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
}

export interface GetPeopleDetail_person_starshipConnection_starships {
  __typename: "Starship";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this starship. The common name, such as "Death Star".
   */
  name: string | null;
}

export interface GetPeopleDetail_person_starshipConnection {
  __typename: "PersonStarshipsConnection";
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
  starships: (GetPeopleDetail_person_starshipConnection_starships | null)[] | null;
}

export interface GetPeopleDetail_person_vehicleConnection_vehicles {
  __typename: "Vehicle";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name: string | null;
}

export interface GetPeopleDetail_person_vehicleConnection {
  __typename: "PersonVehiclesConnection";
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
  vehicles: (GetPeopleDetail_person_vehicleConnection_vehicles | null)[] | null;
}

export interface GetPeopleDetail_person_filmConnection_films {
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

export interface GetPeopleDetail_person_filmConnection {
  __typename: "PersonFilmsConnection";
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
  films: (GetPeopleDetail_person_filmConnection_films | null)[] | null;
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
   * A planet that this person was born on or inhabits.
   */
  homeworld: GetPeopleDetail_person_homeworld | null;
  /**
   * The species that this person belongs to, or null if unknown.
   */
  species: GetPeopleDetail_person_species | null;
  starshipConnection: GetPeopleDetail_person_starshipConnection | null;
  vehicleConnection: GetPeopleDetail_person_vehicleConnection | null;
  filmConnection: GetPeopleDetail_person_filmConnection | null;
}

export interface GetPeopleDetail {
  person: GetPeopleDetail_person | null;
}

export interface GetPeopleDetailVariables {
  id: string;
}
