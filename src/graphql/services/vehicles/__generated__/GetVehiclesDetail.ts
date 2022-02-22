/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVehiclesDetail
// ====================================================

export interface GetVehiclesDetail_vehicle_pilotConnection_pilots {
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

export interface GetVehiclesDetail_vehicle_pilotConnection {
  __typename: "VehiclePilotsConnection";
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
  pilots: (GetVehiclesDetail_vehicle_pilotConnection_pilots | null)[] | null;
}

export interface GetVehiclesDetail_vehicle_filmConnection_films {
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

export interface GetVehiclesDetail_vehicle_filmConnection {
  __typename: "VehicleFilmsConnection";
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
  films: (GetVehiclesDetail_vehicle_filmConnection_films | null)[] | null;
}

export interface GetVehiclesDetail_vehicle {
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
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model: string | null;
  /**
   * The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
   */
  vehicleClass: string | null;
  /**
   * The manufacturers of this vehicle.
   */
  manufacturers: (string | null)[] | null;
  /**
   * The cost of this vehicle new, in Galactic Credits.
   */
  costInCredits: number | null;
  /**
   * The length of this vehicle in meters.
   */
  length: number | null;
  /**
   * The number of personnel needed to run or pilot this vehicle.
   */
  crew: string | null;
  /**
   * The number of non-essential people this vehicle can transport.
   */
  passengers: string | null;
  /**
   * The maximum speed of this vehicle in atmosphere.
   */
  maxAtmospheringSpeed: number | null;
  /**
   * The maximum number of kilograms that this vehicle can transport.
   */
  cargoCapacity: number | null;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: string | null;
  pilotConnection: GetVehiclesDetail_vehicle_pilotConnection | null;
  filmConnection: GetVehiclesDetail_vehicle_filmConnection | null;
}

export interface GetVehiclesDetail {
  vehicle: GetVehiclesDetail_vehicle | null;
}

export interface GetVehiclesDetailVariables {
  id: string;
}
