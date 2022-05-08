import { useEffect, useState } from "react";
import Search from "../Search"
import DataList from "../DataList";
import ItemPagination from "../ItemPagination"
import { useParams, useNavigate } from "react-router-dom";

function Main() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10)

    const { page } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            await fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => setPosts(data))
            setLoading(false);
        }
        fetchPosts();
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
        console.log(pageNumbers);
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
            <DataList items={currentPosts} loading={loading} />
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
