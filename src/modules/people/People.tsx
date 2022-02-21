import React from "react";
import {useQuery} from "@apollo/client";
import GET_PEOPLE from "../../graphql/services/people/queries";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import styled from "styled-components";
import {Avatar} from "../../components/Avatar";

const People: React.FC = () => {
    const {data, loading} = useQuery(GET_PEOPLE);
    if (loading) return <Loading/>
    return (
        <div>
            <h1>People</h1>
            <Container>
                {data.allPeople.people.map((person: any) => (
                    <Card>
                        <Wrapper>
                            <Avatar name={person.name}/>
                            <div className="title">{person.name}</div>
                        </Wrapper>
                    </Card>
                ))}
            </Container>
        </div>
    )
}

const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
`
const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 2em;
`
export default People;