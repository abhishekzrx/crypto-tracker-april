import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./styles.css"
export default function PaginationComponent({page,handlePageChange}) {
  return (
    <div spacing={2}>
      < Pagination 
        className='pagination'
        count={10} 
        page={page}
        onChange={(event,value)=>handlePageChange(event,value)}
        sx={{
          color: "#fff",
          "& .Mui-selected , .Mui-selected:hover": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },

          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid #333",
          },
        }}
      />
      {/* <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={{
          color: "#fff",
          "& .Mui-selected , .Mui-selected:hover": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },

          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid #333",
          },
        }}
      /> */}
    </div>
  );
}