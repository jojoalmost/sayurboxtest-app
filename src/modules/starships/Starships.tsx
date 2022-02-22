import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import GET_STARSHIPS from "../../graphql/services/starships/queries";
import Card from "../../components/Card";
import List from "../../components/List";
import {Avatar} from "../../components/Avatar";

const Starships: React.FC = () => {
    const {data, loading} = useQuery(GET_STARSHIPS);
    if (loading) return <Loading/>
    const {totalCount, starships} = data.allStarships;
    return (
        <div>
            <h1>Starships <span>({totalCount})</span></h1>
            <List.ListContainer>
                {starships.map((starship: any) => (
                    <Card.LinkCard to="/starships/1">
                        <List.ListWrapperAvatar>
                            <Avatar name={starship.name}/>
                            <div className="title">{starship.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}
export default Starships;