/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFilmsDetail
// ====================================================

export interface GetFilmsDetail_film_speciesConnection_species {
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

export interface GetFilmsDetail_film_speciesConnection {
  __typename: "FilmSpeciesConnection";
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
  species: (GetFilmsDetail_film_speciesConnection_species | null)[] | null;
}

export interface GetFilmsDetail_film_starshipConnection_starships {
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

export interface GetFilmsDetail_film_starshipConnection {
  __typename: "FilmStarshipsConnection";
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
  starships: (GetFilmsDetail_film_starshipConnection_starships | null)[] | null;
}

export interface GetFilmsDetail_film_vehicleConnection_vehicles {
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

export interface GetFilmsDetail_film_vehicleConnection {
  __typename: "FilmVehiclesConnection";
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
  vehicles: (GetFilmsDetail_film_vehicleConnection_vehicles | null)[] | null;
}

export interface GetFilmsDetail_film_characterConnection_characters {
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

export interface GetFilmsDetail_film_characterConnection {
  __typename: "FilmCharactersConnection";
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
  characters: (GetFilmsDetail_film_characterConnection_characters | null)[] | null;
}

export interface GetFilmsDetail_film_planetConnection_planets {
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

export interface GetFilmsDetail_film_planetConnection {
  __typename: "FilmPlanetsConnection";
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
  planets: (GetFilmsDetail_film_planetConnection_planets | null)[] | null;
}

export interface GetFilmsDetail_film {
  __typename: "Film";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The title of this film.
   */
  title: string | null;
  /**
   * The episode number of this film.
   */
  episodeID: number | null;
  /**
   * The opening paragraphs at the beginning of this film.
   */
  openingCrawl: string | null;
  /**
   * The name of the director of this film.
   */
  director: string | null;
  /**
   * The name(s) of the producer(s) of this film.
   */
  producers: (string | null)[] | null;
  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  releaseDate: string | null;
  speciesConnection: GetFilmsDetail_film_speciesConnection | null;
  starshipConnection: GetFilmsDetail_film_starshipConnection | null;
  vehicleConnection: GetFilmsDetail_film_vehicleConnection | null;
  characterConnection: GetFilmsDetail_film_characterConnection | null;
  planetConnection: GetFilmsDetail_film_planetConnection | null;
}

export interface GetFilmsDetail {
  film: GetFilmsDetail_film | null;
}

export interface GetFilmsDetailVariables {
  id: string;
}
