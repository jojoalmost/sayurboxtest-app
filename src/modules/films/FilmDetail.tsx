import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import {useParams} from "react-router-dom";
import DetailPage from "../../components/DetailPage";
import Card from "../../components/Card";
import Table from "../../components/Table";
import {GET_FILMS_DETAIL} from "../../graphql/services/films/queries";
import {GetFilmsDetail} from "../../graphql/services/films/__generated__/GetFilmsDetail";
import StarshipsRelated from "../starships/components/StarshipsRelated";
import SpeciesRelated from "../species/components/SpeciesRelated";
import VehiclesRelated from "../vehicles/components/VehiclesRelated";
import PersonRelated from "../people/components/PersonRelated";
import PlanetsRelated from "../planets/components/PlanetsRelated";

const MoviesDetail: React.FC = () => {
    const params = useParams();
    const {data, loading} = useQuery<GetFilmsDetail>(GET_FILMS_DETAIL, {variables: {id: params.id}});
    if (loading) return <Loading/>;
    return (
        <div>
            <DetailPage title={data?.film?.title} backUrl="/films">
                <Card.BoxCard>
                    <Table.TableDetail>
                        <tbody>
                        <tr>
                            <td className="title">name</td>
                            <td className="description">{data?.film?.title}</td>
                        </tr>
                        <tr>
                            <td className="title">episode ID</td>
                            <td className="description">{data?.film?.episodeID}</td>
                        </tr>
                        <tr>
                            <td className="title">opening Crawl</td>
                            <td className="description">{data?.film?.openingCrawl}</td>
                        </tr>
                        <tr>
                            <td className="title">director</td>
                            <td className="description">{data?.film?.director}</td>
                        </tr>
                        <tr>
                            <td className="title">producers</td>
                            <td className="description">{data?.film?.producers}</td>
                        </tr>
                        <tr>
                            <td className="title">release Date</td>
                            <td className="description">{data?.film?.releaseDate}</td>
                        </tr>
                        </tbody>
                    </Table.TableDetail>
                </Card.BoxCard>

                <SpeciesRelated title="Species" data={data?.film?.speciesConnection?.species}/>
                <StarshipsRelated title="Starships" data={data?.film?.starshipConnection?.starships}/>
                <VehiclesRelated title="Vehicles" data={data?.film?.vehicleConnection?.vehicles}/>
                <PersonRelated title="Character" data={data?.film?.characterConnection?.characters}/>
                <PlanetsRelated title="Planets" data={data?.film?.planetConnection?.planets}/>
            </DetailPage>
        </div>
    )
}
export default MoviesDetail;