import React from "react";
import styled from "styled-components";
import Button from "../Button";

interface DetailPageProps {
    title?: string | null;
    backUrl: string;
}

const DetailPage: React.FC<DetailPageProps> = ({title, backUrl, children}) => {
    return (
        <MainWrapper>
            <Wrapper>
                <h1>{title}</h1>
                <div>
                    <Button.ButtonLink to={backUrl}>Back</Button.ButtonLink>
                </div>
            </Wrapper>
            <div>{children}</div>
        </MainWrapper>
    )
}

const MainWrapper = styled('div')`
  margin-bottom: 3em
`

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`


export default DetailPage;