import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import DetailPage from "../../components/DetailPage";
import Card from "../../components/Card";
import Table from "../../components/Table";
import {GET_STARSHIPS_DETAIL} from "../../graphql/services/starships/queries";
import {GetStarshipsDetail} from "../../graphql/services/starships/__generated__/GetStarshipsDetail";

const StarshipDetail: React.FC = () => {
    const params = useParams();
    const {data, loading} = useQuery<GetStarshipsDetail>(GET_STARSHIPS_DETAIL, {variables: {id: params.id}});
    if (loading) return <Loading/>;
    return (
        <div>
            <DetailPage title={data?.starship?.name}>
                <Card.BoxCard>
                    <Table.TableDetail>
                        <tbody>
                        <tr>
                            <td className="title">name</td>
                            <td className="description">{data?.starship?.name}</td>
                        </tr>
                        </tbody>
                    </Table.TableDetail>
                </Card.BoxCard>
            </DetailPage>
        </div>
    )
}
export default StarshipDetail;