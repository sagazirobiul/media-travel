import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import LeaveComment from './LeaveAComment/LeaveComment';
import axios from 'axios'
import ReactPaginate from "react-paginate";
import SpinnerC from '../../../components/Shared/SpinnerC';


const Comments = () => {
  const [update,setUpdate] = useState(false);
  const [comments, setComments] = useState([]);
  const [pageCount, setPageCount] = useState(0);


  useEffect(() => {
    axios('http://localhost:5000/comment')
      .then(res => setComments(res.data.result))
  }, [update, setUpdate])

  
  const handlePageClick = async (data) => {
    setPageCount(data.selected)

  };
console.log(comments.reverse())

  return (
    <div>
      <LeaveComment setUpdate={setUpdate}/>
      <h4 className="leatestCommentTitle">Latest <span className="brnColor">Comments:</span></h4>
      {!comments.length && <div className="text-center my-5"><SpinnerC /></div>}

      {[...comments].reverse().slice(pageCount*3,pageCount*3+3).map((pd) => (
        <CommentCard commentData={pd} key={pd._id} />
      ))}

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(comments.length/6)+1}
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
    </div>
  );
};

export default Comments;

