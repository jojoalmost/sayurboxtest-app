import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GetVehiclesDetail} from "../../graphql/services/vehicles/__generated__/GetVehiclesDetail";
import {GET_VEHICLES_DETAIL} from "../../graphql/services/vehicles/queries";
import Loading from "../../components/Loading";
import DetailPage from "../../components/DetailPage";
import Card from "../../components/Card";
import Table from "../../components/Table";

const VehicleDetail: React.FC = () => {
    const params = useParams();
    const {data, loading} = useQuery<GetVehiclesDetail>(GET_VEHICLES_DETAIL, {variables: {id: params.id}});
    if (loading) return <Loading/>;
    return (
        <div>
            <DetailPage title={data?.vehicle?.name}>
                <Card.BoxCard>
                    <Table.TableDetail>
                        <tbody>
                        <tr>
                            <td className="title">name</td>
                            <td className="description">{data?.vehicle?.name}</td>
                        </tr>
                        <tr>
                            <td className="title">model</td>
                            <td className="description">{data?.vehicle?.model}</td>
                        </tr>
                        <tr>
                            <td className="title">vehicle Class</td>
                            <td className="description">{data?.vehicle?.vehicleClass}</td>
                        </tr>
                        <tr>
                            <td className="title">manufacturers</td>
                            <td className="description">{data?.vehicle?.manufacturers}</td>
                        </tr>
                        <tr>
                            <td className="title">cost In Credits</td>
                            <td className="description">{data?.vehicle?.costInCredits}</td>
                        </tr>
                        <tr>
                            <td className="title">length</td>
                            <td className="description">{data?.vehicle?.length}</td>
                        </tr>
                        <tr>
                            <td className="title">crew</td>
                            <td className="description">{data?.vehicle?.crew}</td>
                        </tr>
                        <tr>
                            <td className="title">passengers</td>
                            <td className="description">{data?.vehicle?.passengers}</td>
                        </tr>
                        <tr>
                            <td className="title">max Atmosphering Speed</td>
                            <td className="description">{data?.vehicle?.maxAtmospheringSpeed}</td>
                        </tr>
                        <tr>
                            <td className="title">cargo Capacity</td>
                            <td className="description">{data?.vehicle?.cargoCapacity}</td>
                        </tr>
                        <tr>
                            <td className="title">consumables</td>
                            <td className="description">{data?.vehicle?.consumables}</td>
                        </tr>
                        </tbody>
                    </Table.TableDetail>
                </Card.BoxCard>
            </DetailPage>
        </div>
    )
}
export default VehicleDetail;