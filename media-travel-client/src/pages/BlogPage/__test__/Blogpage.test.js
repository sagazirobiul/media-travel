import React from "react";
import { act, render,screen, cleanup } from "@testing-library/react";
import Button from "../Button";
import renderer from "react-test-renderer"
import BlogPage from "../SingleBlogPage";
import BlogCategories from "../BlogCategories";
import ShowBlog from "../ShowBlog";

afterEach(cleanup)

it("renders Button without crashing", () => {
    //Paint the DOM with component
    const { container } = render(<BlogCategories />)
    expect(container.textContent).toBe("Submit")
})

it("matches snapshot", () => {
    const tree = renderer.create(<BlogPage />).toJSON()
    expect("submit").toBeFalsy("Search");
})

it('test-blog', ()=>{
    render(<ShowBlog/>);
    const testEle = screen.getByTestId('test-blog');
    expect(testEle).toHaveClass('text-center');
})