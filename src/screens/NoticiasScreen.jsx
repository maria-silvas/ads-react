import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NoticiasScreen() {

=======
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NoticiasScreen() {

    // Criamos uma variável em React 
>>>>>>> d14f4df2d969fa46c01b68308f11e133c7381f11
    const [noticias, setNoticias] = useState([]);

    // Ele é responsável por verificar se o componente 
    // foi montado (apareceu na tela) e se foi montado, 
    // ele executa o código que está dentro dele
    useEffect(() => {
        pegarNoticias();
    }, []);

    function pegarNoticias() {
        fetch('https://dummyjson.com/posts/')
            .then(resposta => resposta.json())
            .then(function (respostaEmJson) {
                setNoticias(respostaEmJson.posts);
            })
    }

    return (
        <Container>
            <h1>Notícias</h1>
<<<<<<< HEAD
            {
                noticias.map(
                    function (noticias, indice) {
                        return (
                            <Container key={indice}>
                                <h1>{noticias.title}</h1>
                                <p>{noticias.body.substring(0, 50)}...</p>
                                <Link to={'/noticias/' + noticias.id}>Leia mais</Link>
                            </Container>
                        )
                    }
                )
            }
=======
            <Container>
                <Row>
                    {
                        noticias.map(
                            function (noticias, indice) {
                                return (
                                    <Col lg={3} xs={12} md={6} key={indice}
                                        style={
                                            {
                                                marginBottom: 20,
                                            }
                                        }>
                                        <Card className="h-100">
                                            <Card.Body>
                                                <Card.Title>{noticias.title}</Card.Title>
                                                <Card.Text>
                                                    {noticias.body.substring(0, 50)} ...
                                                </Card.Text>
                                                <Link to={'/noticias/' + noticias.id}>Leia mais</Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>
            </Container>
>>>>>>> d14f4df2d969fa46c01b68308f11e133c7381f11
        </Container>
    )
}