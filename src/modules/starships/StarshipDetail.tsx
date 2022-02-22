import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import DetailPage from "../../components/DetailPage";
import Card from "../../components/Card";
import Table from "../../components/Table";
import {GET_STARSHIPS_DETAIL} from "../../graphql/services/starships/queries";
import {GetStarshipsDetail} from "../../graphql/services/starships/__generated__/GetStarshipsDetail";
import PersonRelated from "../people/components/PersonRelated";
import FilmRelated from "../films/components/FilmRelated";

const StarshipDetail: React.FC = () => {
    const params = useParams();
    const {data, loading} = useQuery<GetStarshipsDetail>(GET_STARSHIPS_DETAIL, {variables: {id: params.id}});
    if (loading) return <Loading/>;
    return (
        <div>
            <DetailPage title={data?.starship?.name} backUrl="/starships">
                <Card.BoxCard>
                    <Table.TableDetail>
                        <tbody>
                        <tr>
                            <td className="title">name</td>
                            <td className="description">{data?.starship?.name}</td>
                        </tr>
                        <tr>
                            <td className="title">model</td>
                            <td className="description">{data?.starship?.model}</td>
                        </tr>
                        <tr>
                            <td className="title">starship Class</td>
                            <td className="description">{data?.starship?.starshipClass}</td>
                        </tr>
                        <tr>
                            <td className="title">manufacturers</td>
                            <td className="description">{data?.starship?.manufacturers}</td>
                        </tr>
                        <tr>
                            <td className="title">cost In Credits</td>
                            <td className="description">{data?.starship?.costInCredits}</td>
                        </tr>
                        <tr>
                            <td className="title">length</td>
                            <td className="description">{data?.starship?.length}</td>
                        </tr>
                        <tr>
                            <td className="title">crew</td>
                            <td className="description">{data?.starship?.crew}</td>
                        </tr>
                        <tr>
                            <td className="title">passengers</td>
                            <td className="description">{data?.starship?.passengers}</td>
                        </tr>
                        <tr>
                            <td className="title">max Atmosphering Speed</td>
                            <td className="description">{data?.starship?.maxAtmospheringSpeed}</td>
                        </tr>
                        <tr>
                            <td className="title">hyperdrive Rating</td>
                            <td className="description">{data?.starship?.hyperdriveRating}</td>
                        </tr>
                        <tr>
                            <td className="title">MGLT</td>
                            <td className="description">{data?.starship?.MGLT}</td>
                        </tr>
                        <tr>
                            <td className="title">cargo Capacity</td>
                            <td className="description">{data?.starship?.cargoCapacity}</td>
                        </tr>
                        <tr>
                            <td className="title">cargo consumables</td>
                            <td className="description">{data?.starship?.consumables}</td>
                        </tr>
                        </tbody>
                    </Table.TableDetail>

                </Card.BoxCard>

                <PersonRelated title="Pilot" data={data?.starship?.pilotConnection?.pilots}/>
                <FilmRelated title="Films" data={data?.starship?.filmConnection?.films}/>
            </DetailPage>
        </div>
    )
}
export default StarshipDetail;