import { TablePagination } from '@material-ui/core';
import React, { useContext } from 'react';
import { clientContext } from '../contexts/ClientContext';

const Pagination = () => {
    const { postsPerPage, totalPosts, changePage } = useContext(clientContext)
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    console.log(window)
    return (
        <div>
            <ul className="pagination">

                {
                    pageNumber.map(item => (
                        <>
                            {/* <Pagination count={10} size="small" /> */}
                            <ul onClick={() => {
                                changePage(item)
                                window.scrollTo(0, 0)
                            }} key={item}>{item}</ul>
                        </>
                    ))
                }
            </ul>
        </div >
    );
};

export default Pagination;
