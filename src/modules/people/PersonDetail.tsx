import React from "react";
import {useQuery} from "@apollo/client";
import {GET_PEOPLE_DETAIL} from "../../graphql/services/people/queries";
import Loading from "../../components/Loading";
import {Link, useParams} from "react-router-dom";
import DetailPage from "../../components/DetailPage";
import Card from "../../components/Card";
import Table from "../../components/Table";
import {GetPeopleDetail} from "../../graphql/services/people/__generated__/GetPeopleDetail";
import StarshipsRelated from "../starships/components/StarshipsRelated";
import VehiclesRelated from "../vehicles/components/VehiclesRelated";
import FilmRelated from "../films/components/FilmRelated";

const PeopleDetail: React.FC = () => {
    const params = useParams();
    const {data, loading} = useQuery<GetPeopleDetail>(GET_PEOPLE_DETAIL, {variables: {id: params.id}});
    if (loading) return <Loading/>;
    return (
        <div>
            <DetailPage title={data?.person?.name} backUrl="/people">
                <Card.BoxCard>
                    <Table.TableDetail>
                        <tbody>
                        <tr>
                            <td className="title">name</td>
                            <td className="description">{data?.person?.name}</td>
                        </tr>
                        <tr>
                            <td className="title">birth Year</td>
                            <td className="description">{data?.person?.birthYear}</td>
                        </tr>
                        <tr>
                            <td className="title">eye Color</td>
                            <td className="description">{data?.person?.eyeColor}</td>
                        </tr>
                        <tr>
                            <td className="title">gender</td>
                            <td className="description">{data?.person?.gender}</td>
                        </tr>
                        <tr>
                            <td className="title">hair Color</td>
                            <td className="description">{data?.person?.hairColor}</td>
                        </tr>
                        <tr>
                            <td className="title">height</td>
                            <td className="description">{data?.person?.height}</td>
                        </tr>
                        <tr>
                            <td className="title">mass</td>
                            <td className="description">{data?.person?.mass}</td>
                        </tr>
                        <tr>
                            <td className="title">skin Color</td>
                            <td className="description">{data?.person?.skinColor}</td>
                        </tr>
                        <tr>
                            <td className="title">species</td>
                            <td className="description">
                                <Link
                                    to={`/species/${data?.person?.species?.id}`}>{data?.person?.species?.name}</Link>
                            </td>
                        </tr>
                        </tbody>
                    </Table.TableDetail>
                </Card.BoxCard>

                <StarshipsRelated title="Starships" data={data?.person?.starshipConnection?.starships} />
                <VehiclesRelated title="Vehicles" data={data?.person?.vehicleConnection?.vehicles}/>
                <FilmRelated title="Films" data={data?.person?.filmConnection?.films}/>
            </DetailPage>
        </div>
    )
}
export default PeopleDetail;