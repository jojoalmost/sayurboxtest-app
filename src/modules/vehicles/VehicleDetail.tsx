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
                        </tbody>
                    </Table.TableDetail>
                </Card.BoxCard>
            </DetailPage>
        </div>
    )
}
export default VehicleDetail;