/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStarships
// ====================================================

export interface GetStarships_allStarships_starships {
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

export interface GetStarships_allStarships {
  __typename: "StarshipsConnection";
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
  starships: (GetStarships_allStarships_starships | null)[] | null;
}

export interface GetStarships {
  allStarships: GetStarships_allStarships | null;
}
