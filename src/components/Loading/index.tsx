import React from "react";
import styled from "styled-components";
import {ReactComponent as LoadingImage} from '../../assets/svg/loading.svg'

const Container = styled('div')`
  height: 100vh;
  display: flex;
`

const Loading: React.FC = () => (
    <Container>
        <LoadingImage/>
    </Container>
)
export default Loading;