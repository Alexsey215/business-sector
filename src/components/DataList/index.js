import { Col, Container, Row } from "react-bootstrap";
import style from "./index.module.scss";
import Header from "../Header";

const DataList = ({ items, loading, error }) => {

    return (
        <>
            <Header />
            <Container className={style.wrap}>
                {loading && <h4>Loading...</h4>}
                {error && <h4>{error}</h4>}
                {!!items
                    &&
                    items.map((item) =>
                        <Row className={style.wrap__data} key={item.id}>
                            <Col className="align-self-center" xs={1}>{item.id}</Col>
                            <Col className="text-start align-self-center p-2" xs={6}>{item.title}</Col>
                            <Col className="text-start align-self-center p-2" xs={5}>{item.body}</Col>
                        </Row>
                    )
                }
            </Container>
        </>
    );
}
export default DataList;
