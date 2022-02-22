/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStarshipsDetail
// ====================================================

export interface GetStarshipsDetail_starship_pilotConnection_pilots {
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

export interface GetStarshipsDetail_starship_pilotConnection {
  __typename: "StarshipPilotsConnection";
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
  pilots: (GetStarshipsDetail_starship_pilotConnection_pilots | null)[] | null;
}

export interface GetStarshipsDetail_starship_filmConnection_films {
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

export interface GetStarshipsDetail_starship_filmConnection {
  __typename: "StarshipFilmsConnection";
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
  films: (GetStarshipsDetail_starship_filmConnection_films | null)[] | null;
}

export interface GetStarshipsDetail_starship {
  __typename: "Starship";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this starship. The common name, such as "Death Star".
   */
  name: string | null;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model: string | null;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass: string | null;
  /**
   * The manufacturers of this starship.
   */
  manufacturers: (string | null)[] | null;
  /**
   * The cost of this starship new, in galactic credits.
   */
  costInCredits: number | null;
  /**
   * The length of this starship in meters.
   */
  length: number | null;
  /**
   * The number of personnel needed to run or pilot this starship.
   */
  crew: string | null;
  /**
   * The number of non-essential people this starship can transport.
   */
  passengers: string | null;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed: number | null;
  /**
   * The class of this starships hyperdrive.
   */
  hyperdriveRating: number | null;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT: number | null;
  /**
   * The maximum number of kilograms that this starship can transport.
   */
  cargoCapacity: number | null;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: string | null;
  pilotConnection: GetStarshipsDetail_starship_pilotConnection | null;
  filmConnection: GetStarshipsDetail_starship_filmConnection | null;
}

export interface GetStarshipsDetail {
  starship: GetStarshipsDetail_starship | null;
}

export interface GetStarshipsDetailVariables {
  id: string;
}
