import { useEffect, useState } from "react";
import Search from "../Search"
import {Container, Row, Col} from "react-bootstrap";
import Header from "../Header";
import DataList from "../DataList";
import ItemPagination from "../ItemPagination"
function Main() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10)

    useEffect(() => {
      const fetchPosts = async () => {
          setLoading(true);
          await fetch("https://jsonplaceholder.typicode.com/posts")
              .then(response => response.json())
              .then(data => setPosts(data))
          setLoading(false);
        }                                                    
        fetchPosts();
    }
    , [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFistPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFistPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const nextPage = () => {
      setCurrentPage(currentPage + 1)
    }
    const prevPage = () => setCurrentPage(currentPage - 1)

    return (
        <>
            <Search />
            <Header/>
            <DataList items={currentPost} loading={loading}/>
            <ItemPagination 
            itemsPerPage={postsPerPage}
            totalItem={posts.length}
            paginate={paginate} 
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
            />
        </>
    );
}

export default Main;
