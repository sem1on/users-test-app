import { usePagination } from '../hooks/usePagination';

import '../styles/Pagination.css';


const Pagination =({ totalPages, page, changePage, isVision }) => {
    let pagesArray = usePagination(totalPages);

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }

    return (
        <div className='page-wrapper'>
            {pagesArray.map(p =>
                <span 
                    onClick={() => changePage(p)}
                    key={p} 
                    className={page === p ? 'page page-current'+clazzz : 'page'+clazzz}
                >
                    {p}
                </span>    
            )}
        </div>
    )
}

export default Pagination;
