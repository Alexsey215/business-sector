import style from "./index.module.scss";
import { Link, useParams } from "react-router-dom";


const ItemPagination = ({ pageNumbers, paginate, nextPage, prevPage }) => {
    const { page } = useParams();

    return (
        <div className={style.pagination}>
            <button className={style.pagination__btn} onClick={() => prevPage()}>Назад</button>
            <div className={style.pagination__links}>
                {pageNumbers.map((number) => (
                    <Link className={number === Number(page) ? style.pagination__links__active : style.pagination__links__link} onClick={() => paginate(number)} key={number} to={`/posts/${number}`}>
                        <li>
                            {number}
                        </li>
                    </Link>
                ))}
            </div>
            <button className={style.pagination__btn} onClick={() => nextPage()}>Далее</button>
        </div>
    );
}
export default ItemPagination;