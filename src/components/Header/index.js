import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postsSlice } from "../../store/reducers/PostsSlice";
import style from "./index.module.scss"


const Header = () => {
    const dispatch = useDispatch();

    const idSortHandler = () => {
        dispatch(postsSlice.actions.postsSortById());
    }

    const titleSortHandler = () => {
        dispatch(postsSlice.actions.postsSortTitle());
    }

    const bodySortHandler = () => {
        dispatch(postsSlice.actions.postsSortBody());
    }

    return (
        <header className={style.header}>
            <Row className={style.header__items}>
                <Col onClick={() => idSortHandler()} className={style.header__items__id + " " + style.header__items__item} xs={1}>
                    <span>id</span>
                </Col>
                <Col onClick={() => titleSortHandler()} className={style.header__items__item} xs={5}>
                    <span >Заголовок</span>
                </Col>
                <Col onClick={() => bodySortHandler()} className={style.header__items__item} xs={6}>
                    <span >Описание</span>
                </Col>
            </Row>
        </header>
    );
}
export default Header;
