/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import { agregarCalificacion } from '../../../Redux/actions/actions';
import { useDispatch } from 'react-redux';


import './UserReview.css';


function enviarCalificacion(puntuacion, comentario, dispatch){
    
    dispatch(agregarCalificacion({puntuacion, comentario}))

}
function cambiarEstrellas(e, estrellas, setEstrellas){
    setEstrellas(estrellas = e.target.value)
}
function cambiarTexto(e, texto, setTexto){
    setTexto(texto = e.target.value)
}
function UserReview(){
    const dispatch = useDispatch()
    const [estrellas, setEstrellas] = useState(0)
    const [texto, setTexto] = useState('')
    return(
    <div>
        <h2>Califica tu experiencia de compra</h2>
        <br></br>
        <p className="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5" onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}/>
            <label htmlFor="radio1">★</label>
            <input id="radio2" type="radio" name="estrellas" value="4" onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}/>
            <label htmlFor="radio2">★</label>
            <input id="radio3" type="radio" name="estrellas" value="3" onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}/>
            <label htmlFor="radio3">★</label>
            <input id="radio4" type="radio" name="estrellas" value="2" onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}/>
            <label htmlFor="radio4">★</label>
            <input id="radio5" type="radio" name="estrellas" value="1" onChange={(e) => cambiarEstrellas(e, estrellas, setEstrellas)}/>
            <label htmlFor="radio5">★</label>
        </p>
        <h4>Deja tu sugerencia o comentario en el siguiente campo</h4>
        <textarea placeholder='Escribe tu opinion' rows={5} cols={60} onChange={(e) => cambiarTexto(e, texto, setTexto)}></textarea>
        {estrellas === 0 ?(
            <span>Por favor escoge una puntuacion</span>
        ): <div></div>}
        <button disabled={estrellas === 0} onClick={() => enviarCalificacion(estrellas, texto, dispatch)}>Enviar</button>
    </div>
    )
}

export default UserReview;