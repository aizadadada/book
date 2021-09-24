// // import { TablePagination } from '@material-ui/core';
// // import React, { useContext } from 'react';
// // import { clientContext } from '../contexts/ClientContext';

// // const Pagination = () => {
// //     const { postsPerPage, totalPosts, changePage } = useContext(clientContext)
// //     const pageNumber = []
// //     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
// //         pageNumber.push(i)
// //     }
// //     console.log(window)
// //     return (
// // <div>
// //     <ul className="pagination">

// //         {
// //             pageNumber.map(item => (
// //                 <>
// //                     {/* <Pagination count={10} size="small" /> */}
// //                     <ul onClick={() => {
// //                         changePage(item)
// //                         window.scrollTo(0, 0)
// //                     }} key={item}>{item}</ul>
// //                 </>
// //             ))
// //         }
// //     </ul>
// // </div >
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

// export default function SizePaginationGrid() {
//     const [pageSize, setPageSize] = React.useState(5);

//     const { data } = useDemoData({
//         dataSet: 'Commodity',
//         rowLength: 100,
//         maxColumns: 6,
//     });

//     return (
//         <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 pageSize={pageSize}
//                 onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//                 rowsPerPageOptions={[5, 10, 20]}
//                 pagination
//                 {...data}
//             />
//         </div>
//     );
// }

// //     );
// // };

// // export default Pagination;
import React, { useContext } from 'react';
import { clientContext } from '../contexts/ClientContext';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
// import "../index.css"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        color: "white"
    },
}));

const PPagination = () => {
    const { postsPerPage, totalPosts, changePage } = useContext(clientContext)
    const classes = useStyles();
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    console.log(window)
    return (

        <div  >

            <ul>
                <div className={classes.root}>
                    <Pagination className="pagin"
                        count={pageNumber.length} shape="rounded"
                        onChange={(e, newPage) => changePage(newPage)}
                    />
                </div>
                {/* { 
                    pageNumber.map(item => ( 
                        <li onClick={() => { 
                            changePage(item) 
                            window.scrollTo(0, 0) 
                        }} key={item}>{item}</li> 
 
                    )) 
                } */}
            </ul>
        </div>
    );
};

export default PPagination;
