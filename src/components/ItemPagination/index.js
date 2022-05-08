import style from "./index.module.scss";
import { Link } from "react-router-dom";
const ItemPagination = ({ pageNumbers, paginate, nextPage, prevPage }) => {

    return (
        <div className={style.pagination}>
            <button className={style.pagination__btn} onClick={() => prevPage()}>Назад</button>
            <div className={style.pagination__links}>
                {pageNumbers.map((number) => (
                    <Link className={style.pagination__links__link} onClick={() => paginate(number)} key={number} to={`/posts/${number}`}>
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