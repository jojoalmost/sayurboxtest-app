import {gql} from "@apollo/client";

export const GET_PLANETS = gql`
    query GetPlanets{
        allPlanets {
            totalCount
            planets {
                id
                name
            }
        }
    }`

export const GET_PLANET_DETAIL =gql`
    query GetPlanetDetail($id: ID!){
        planet(id: $id) {
            id
            name
            diameter
            rotationPeriod
            orbitalPeriod
            gravity
            population
            climates
            surfaceWater
        }
    }`