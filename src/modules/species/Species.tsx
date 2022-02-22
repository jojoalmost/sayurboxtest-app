import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import List from "../../components/List";
import {Avatar} from "../../components/Avatar";
import {GetSpecies} from "../../graphql/services/species/__generated__/GetSpecies";
import {GET_SPECIES} from "../../graphql/services/species/queries";

const Species: React.FC = () => {
    const {data, loading} = useQuery<GetSpecies>(GET_SPECIES);
    if (loading) return <Loading/>;
    return (
        <div>
            <h1>Species <span>({data?.allSpecies?.totalCount})</span></h1>
            <List.ListContainer>
                {data?.allSpecies?.species?.map(item => (
                    <Card.LinkCard key={item?.id} to={`/species/${item?.id}`}>
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
export default Species;