import React from 'react'
import { usePagination } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePages}) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="page__wrapper">
          {pagesArray.map(p => 
            <span 
                onClick={() => changePages(p)} 
                key={p} 
                className={page === p ? 'page page__current' : 'page'}>
              {p}
            </span>
          )}
        </div>
  )
}

export default Pagination;