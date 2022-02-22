import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import DetailPage from "../../components/DetailPage";
import Card from "../../components/Card";
import Table from "../../components/Table";
import {GET_PLANET_DETAIL} from "../../graphql/services/planets/queries";
import {GetPlanetDetail} from "../../graphql/services/planets/__generated__/GetPlanetDetail";
import PersonRelated from "../people/components/PersonRelated";
import FilmRelated from "../films/components/FilmRelated";

const PlanetDetail: React.FC = () => {
    const params = useParams();
    const {data, loading} = useQuery<GetPlanetDetail>(GET_PLANET_DETAIL, {variables: {id: params.id}});
    if (loading) return <Loading/>;
    return (
        <div>
            <DetailPage title={data?.planet?.name} backUrl="/planets">
                <Card.BoxCard>
                    <Table.TableDetail>
                        <tbody>
                        <tr>
                            <td className="title">name</td>
                            <td className="description">{data?.planet?.name}</td>
                        </tr>
                        <tr>
                            <td className="title">diameter</td>
                            <td className="description">{data?.planet?.diameter}</td>
                        </tr>
                        <tr>
                            <td className="title">rotation Period</td>
                            <td className="description">{data?.planet?.rotationPeriod}</td>
                        </tr>
                        <tr>
                            <td className="title">orbital Period</td>
                            <td className="description">{data?.planet?.orbitalPeriod}</td>
                        </tr>
                        <tr>
                            <td className="title">gravity</td>
                            <td className="description">{data?.planet?.gravity}</td>
                        </tr>
                        <tr>
                            <td className="title">population</td>
                            <td className="description">{data?.planet?.population}</td>
                        </tr>
                        <tr>
                            <td className="title">climates</td>
                            <td className="description">{data?.planet?.climates}</td>
                        </tr>
                        <tr>
                            <td className="title">surface Water</td>
                            <td className="description">{data?.planet?.surfaceWater}</td>
                        </tr>
                        </tbody>
                    </Table.TableDetail>
                </Card.BoxCard>

                <PersonRelated title="Residents" data={data?.planet?.residentConnection?.residents}/>
                <FilmRelated title="Films" data={data?.planet?.filmConnection?.films}/>
            </DetailPage>
        </div>
    )
}
export default PlanetDetail;