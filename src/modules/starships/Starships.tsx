import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import List from "../../components/List";
import {Avatar} from "../../components/Avatar";
import {GetStarships} from "../../graphql/services/starships/__generated__/GetStarships";
import {GET_STARSHIPS} from "../../graphql/services/starships/queries";

const Starships: React.FC = () => {
    const {data, loading} = useQuery<GetStarships>(GET_STARSHIPS);
    if (loading) return <Loading/>
    return (
        <div>
            <h1>Starships <span>({data?.allStarships?.totalCount})</span></h1>
            <List.ListContainer>
                {data?.allStarships?.starships?.map(item => (
                    <Card.LinkCard key={item?.id} to={`/starships/${item?.id}`}>
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
export default Starships;