import React from 'react';
import { Route, Switch } from 'react-router';
import Blog from './Blog';
import Footer from '../../components/Footer/Footer';
import SingleBlogPage from './SingleBlogPage';
import BlogDetails from './BlogDetails';
import Banner from '../../components/Shared/Banner';
import NavBar from '../../components/Shared/NavBar/NavBar';

const BlogPage = () => {
    const category = "all";
    return (
        <div>
            <NavBar/>
            <Banner title="Blog"/>
            <div className="blogPage w-100">
                <Switch>
                    <Route path="/blog/details/:id">
                        <BlogDetails />
                    </Route>
                    <Route path="/blog/:id">
                        <SingleBlogPage />
                    </Route>
                    <Route path="/blog">
                        <Blog category={category} />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;