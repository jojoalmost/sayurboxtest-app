import React from "react";
import styled from "styled-components";

interface AvatarProps {
    name?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({name}) => {
    let initials = '';
    if (name){
        const fullName = name.split(' ');
        if (fullName.length > 0) {
            let firstName = fullName.shift()?.charAt(0) || '';
            let lastName = fullName.pop()?.charAt(0) || '';
            initials = firstName + lastName;
        }
    }
    return (
        <Container>{initials.toUpperCase()}</Container>
    );
}


const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  color: white;
  background-color: #47b04b;
`
export default Avatar;