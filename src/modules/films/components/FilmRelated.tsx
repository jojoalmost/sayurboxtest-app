import React from "react";
import Card from "../../../components/Card";
import {GetPeopleDetail_person} from "../../../graphql/services/people/__generated__/GetPeopleDetail";
import List from "../../../components/List";
import {Avatar} from "../../../components/Avatar";
import {GetFilms_allFilms_films} from "../../../graphql/services/films/__generated__/GetFilms";

interface FilmProps {
    title: string;
    data?: (Pick<GetFilms_allFilms_films, 'id' | 'title'> | null)[] | null
}

const FilmRelated: React.FC<FilmProps> = ({title, data}) => {
    if (data?.length === 0) return null;
    return (
        <div>
            <h2>{title}</h2>
            <List.ListContainer>
                {data?.map(item => (
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
export default FilmRelated;