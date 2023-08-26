import React from "react";
import { cleanup, render } from "@testing-library/react";
import NavBar from '../NavBar';
import './BrandLogo.css';

//for Snapshot testing
import renderer from 'react-test-renderer';

//unmount and clean DOM after every test
afterEach(cleanup);


it("renders Header without crashing", () => {
    //Paint the DOM with component
    const { container } = render(<NavBar />)
    expect(container.textContent).toBe("User Registration")
})

it("renders <Header/> with a prop", () => {
    const title = "My Header"
    const { getByText } = render(<NavBar title={title} />)
    expect(getByText('My Header')).toBeTruthy()
})


it("matches snapshot", () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
})