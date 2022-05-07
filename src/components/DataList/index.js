import { Col, Container, Row } from "react-bootstrap";
import style from "./index.module.scss";

const DataList = ({items, loading}) => {
    if (loading) {
        return <h4>Loading...</h4>
    }
    return (
        <Container>
            {!!items
                &&
                items.map((item) =>
                    <Row className={style.data + " " + ""} key={item.id}>
                        <Col className={style.data__item + " " + "align-self-center"} xs={1}>{item.id}</Col>
                        <Col className={style.data__item + " " + "text-start align-self-center"} xs={6}>{item.title}</Col>
                        <Col className={style.data__item + " " + "text-start align-self-center"} xs={5}>{item.body}</Col>
                    </Row>
                )
            }
        </Container>
    );
}
export default DataList;
