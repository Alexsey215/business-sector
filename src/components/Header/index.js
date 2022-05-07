import { Row, Col } from "react-bootstrap";
import style from "./index.module.scss"
const Header = () => {

    return (
        <header className={style.header}>
            <Row className={style.header__items}>
                <Col className={style.header__items__id + " " + style.header__items__item} xs={1}>
                    <span>id</span>
                </Col>
                <Col className={style.header__items__item} xs={5}>
                    <span >Заголовок</span>
                </Col>
                <Col className={style.header__items__item} xs={6}>
                    <span >Описание</span>
                </Col>
            </Row>
        </header>
    );
}
export default Header;
