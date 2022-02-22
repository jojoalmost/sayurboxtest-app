import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import List from "../../components/List";
import Card from "../../components/Card";
import {Avatar} from "../../components/Avatar";
import {GET_PLANETS} from "../../graphql/services/planets/queries";
import {GetPlanets} from "../../graphql/services/planets/__generated__/GetPlanets";

const Planets: React.FC = () => {
    const {data, loading} = useQuery<GetPlanets>(GET_PLANETS);
    if (loading) return <Loading/>
    return (
        <div>
            <h1>Planets <span>({data?.allPlanets?.totalCount})</span></h1>
            <List.ListContainer>
                {data?.allPlanets?.planets?.map(item => (
                    <Card.LinkCard key={item?.id} to={`/planets/${item?.id}`}>
                        <List.ListWrapperAvatar>
                            <Avatar name={item?.name}/>
                            <div className="title">{item?.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}
export default Planets;