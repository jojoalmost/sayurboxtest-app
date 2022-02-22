import React from 'react';
import {render, screen} from '@testing-library/react';
import {Avatar} from "../Avatar";

describe("Avatar", () => {
    const AvatarContainer = () => <Avatar name="content"/>;

    it("render correctly", () => {
        const {container} = render(<AvatarContainer/>);
        expect(container).toBeInTheDocument();
    });

    it("render children correctly", () => {
        const {getByText} = render(<AvatarContainer/>);
        const content = getByText(/c/i);
        expect(content).toBeInTheDocument();
    });
});