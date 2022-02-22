import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import GET_SPECIES from "../../graphql/services/species/queries";
import Card from "../../components/Card";
import List from "../../components/List";
import {Avatar} from "../../components/Avatar";

const Species: React.FC = () => {
    const {data, loading} = useQuery(GET_SPECIES);
    if (loading) return <Loading/>
    const {totalCount, species} = data.allSpecies;
    return (
        <div>
        <h1>Species <span>({totalCount})</span></h1>
            <List.ListContainer>
                {species.map((species: any) => (
                    <Card.LinkCard to="/species/1">
                        <List.ListWrapperAvatar>
                            <Avatar name={species.name}/>
                            <div className="title">{species.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}
export default Species;