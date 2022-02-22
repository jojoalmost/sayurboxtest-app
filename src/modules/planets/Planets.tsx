import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import GET_PLANETS from "../../graphql/services/planets/queries";
import List from "../../components/List";
import Card from "../../components/Card";
import {Avatar} from "../../components/Avatar";

const Planets: React.FC = () => {
    const {data, loading} = useQuery(GET_PLANETS);
    if (loading) return <Loading/>
    const {totalCount, planets} = data.allPlanets;
    return (
        <div>
            <h1>Planets <span>({totalCount})</span></h1>
            <List.ListContainer>
                {planets.map((planet: any) => (
                    <Card.LinkCard to="planet/1">
                        <List.ListWrapperAvatar>
                            <Avatar name={planet.name}/>
                            <div className="title">{planet.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}
export default Planets;