import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import DetailPage from "../../components/DetailPage";
import Card from "../../components/Card";
import Table from "../../components/Table";
import {GetSpeciesDetail} from "../../graphql/services/species/__generated__/GetSpeciesDetail";
import {GET_SPECIES_DETAIL} from "../../graphql/services/species/queries";

const SpeciesDetail: React.FC = () => {
    const params = useParams();
    const {data, loading} = useQuery<GetSpeciesDetail>(GET_SPECIES_DETAIL, {variables: {id: params.id}});
    if (loading) return <Loading/>;
    return (
        <div>
            <DetailPage title={data?.species?.name} backUrl="/species">
                <Card.BoxCard>
                    <Table.TableDetail>
                        <tbody>
                        <tr>
                            <td className="title">name</td>
                            <td className="description">{data?.species?.name}</td>
                        </tr>
                        <tr>
                            <td className="title">classification</td>
                            <td className="description">{data?.species?.classification}</td>
                        </tr>
                        <tr>
                            <td className="title">designation</td>
                            <td className="description">{data?.species?.designation}</td>
                        </tr>
                        <tr>
                            <td className="title">average Height</td>
                            <td className="description">{data?.species?.averageHeight}</td>
                        </tr>
                        <tr>
                            <td className="title">average Lifespan</td>
                            <td className="description">{data?.species?.averageLifespan}</td>
                        </tr>
                        <tr>
                            <td className="title">eye Colors</td>
                            <td className="description">{data?.species?.eyeColors}</td>
                        </tr>
                        <tr>
                            <td className="title">hair Colors</td>
                            <td className="description">{data?.species?.hairColors}</td>
                        </tr>
                        <tr>
                            <td className="title">skin Colors</td>
                            <td className="description">{data?.species?.skinColors}</td>
                        </tr>
                        <tr>
                            <td className="title">language</td>
                            <td className="description">{data?.species?.language}</td>
                        </tr>
                        </tbody>
                    </Table.TableDetail>
                </Card.BoxCard>
            </DetailPage>
        </div>
    )
}
export default SpeciesDetail;