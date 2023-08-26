import React, { useEffect, useState } from "react";
import BlogCategories from "./BlogCategories";
import ShowBlog from "./ShowBlog";
import axios from 'axios';
import SpinnerC from '../../components/Shared/SpinnerC';
import ReactPaginate from "react-paginate";

const Blog = ({ category }) => {
  const [blog, setBlog] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    axios('http://localhost:5000/blog')
      .then(res => setBlog(res.data.result))
  }, []);

  const handlePageClick = async (data) => {
    setPageCount(data.selected)

  };
  return (
    <section className="homeSection row w-100 p-2 px-4">
      <div className="col-md-3 col-sm-12">
        <BlogCategories></BlogCategories>
      </div>
      <div className="container col-md-9 col-sm-12">
        <div className="row mb-5">

          {!blog.length && <div className="text-center mt-5 pt-5"><SpinnerC/></div>}
          
          {category === 'all' && blog.slice(pageCount*6,pageCount*6+6).map((pd) => (
            <ShowBlog blog={pd} key={pd._id} />
          ))}

          {category === 'top' && blog.slice(-6).map((pd) => (
            <ShowBlog blog={pd} key={pd._id}></ShowBlog>
          ))}

        </div>
        {
          blog.length > 0 &&
          <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(blog.length/6)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
        }
      </div>
    </section>
  );
};

export default Blog;
