/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlanetDetail
// ====================================================

export interface GetPlanetDetail_planet {
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

export interface GetPlanetDetail {
  planet: GetPlanetDetail_planet | null;
}

export interface GetPlanetDetailVariables {
  id: string;
}
