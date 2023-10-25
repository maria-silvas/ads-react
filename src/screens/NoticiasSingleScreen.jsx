import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
export default function NoticiasSingleScreen() {
    const [noticia, setNoticia] = useState([]);
    const { idNoticia } = useParams();
    useEffect(() => {
        fetch('https://dummyjson.com/posts/' + idNoticia)
            .then(resposta => resposta.json())
            .then(function (respostaEmJson) {
                setNoticia(respostaEmJson);
            })

<<<<<<< HEAD
    }, [])
=======
    }, [idNoticia])
>>>>>>> d14f4df2d969fa46c01b68308f11e133c7381f11
    return (
        <Container>
            {noticia?.title &&
                (
<<<<<<< HEAD
                    <div>
                        <h1>{noticia.title} </h1>
                        <p>{noticia.body}</p>
                    </div>
=======
                    <Container>
                        <h1>{noticia.title}</h1>
                        <p>{noticia.body}</p>
                    </Container>
>>>>>>> d14f4df2d969fa46c01b68308f11e133c7381f11
                )
            }
        </Container>
    )
}