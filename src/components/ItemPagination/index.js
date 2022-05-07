import Pagination from "react-bootstrap/Pagination"
import {Link} from "react-router-dom";
const ItemPagination = ({itemsPerPage, totalItem, paginate, nextPage, prevPage, currentPage}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalItem/itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <Pagination>
                <Pagination.Prev onClick={() => prevPage()}/>
                {pageNumbers.map((number) => (
                    <Pagination.Item onClick={() => paginate(number)} key={number}>
                        <Link to={`/posts/page-${currentPage}`}>
                            {number}
                        </Link>
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => nextPage()}/>
            </Pagination>
        </>
    );
}
export default ItemPagination;