import React from 'react';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

//   window.onload=function(){
//     let btnPrimary = document.querySelector('#primary');
//     btnPrimary.addEventListener('click', () => btnPrimary.style.backgroundColor = '#337ab7')
//   }

  return (
    <nav>
      <ul className='pagination mt-3'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item '>
            <a onClick={() => paginate(number)} href id="#primary" className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;