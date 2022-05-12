import { useEffect, useState } from "react";
import Search from "../Search"
import DataList from "../DataList";
import ItemPagination from "../ItemPagination"
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/reducers/ActionCreators";


function Main() {
    const dispatch = useDispatch();
    const { posts, isLoading, error } = useSelector(state => state.postsReducer);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10)

    const { page } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    useEffect(() => {
        if (page) {
            setCurrentPage(Number(page));
        }
    }, [page])


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage !== pageNumbers.length) {
            setCurrentPage(currentPage + 1);
            navigate(`/posts/${currentPage + 1}`);
        }
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/posts/${currentPage - 1}`);
        }
    }

    return (
        <>
            <Search />
            <DataList items={currentPosts} loading={isLoading} error={error} />
            <ItemPagination
                pageNumbers={pageNumbers}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </>
    );
}

export default Main;
