import {gql} from "@apollo/client";

export const GET_FILMS = gql`
    query GetFilms{
        allFilms {
            totalCount
            films {
                id
                title
            }
        }
    }`

export const GET_FILMS_DETAIL = gql`
    query GetFilmsDetail($id: ID!){
        film(id: $id) {
            id
            title
            episodeID
            openingCrawl
            director
            producers
            releaseDate
            speciesConnection {
                totalCount
                species {
                    id
                    name
                }
            }
            starshipConnection {
                totalCount
                starships {
                    id
                    name
                }
            }
            vehicleConnection {
                totalCount
                vehicles {
                    id
                    name
                }
            }
            characterConnection {
                totalCount
                characters {
                    id
                    name
                }
            }
            planetConnection {
                totalCount
                planets {
                    id
                    name
                }
            }
        }
    }`
