import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import {Avatar} from "../../components/Avatar";
import List from "../../components/List";
import {GET_FILMS} from "../../graphql/services/films/queries";
import {GetFilms} from "../../graphql/services/films/__generated__/GetFilms";

const Films: React.FC = () => {
    const {data, loading} = useQuery<GetFilms>(GET_FILMS);
    if (loading) return <Loading/>;
    return (
        <div>
            <h1>Films <span>({data?.allFilms?.totalCount})</span></h1>
            <List.ListContainer>
                {data?.allFilms?.films?.map(item => (
                    <Card.LinkCard key={item?.id} to={`/films/${item?.id}`}>
                        <List.ListWrapperAvatar>
                            <Avatar name={item?.title}/>
                            <div className="title">{item?.title}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}

export default Films;