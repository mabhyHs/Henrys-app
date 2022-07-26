import React, {useState, useEffect} from "react";
import {connect, useDispatch, useSelector} from 'react-redux'
import { getIngredients } from "../../Redux/actions/actions";


const mapStateToProps = function(state){
    return {ingredients: state.ingredients}
}
const modificarIngredientes = function(id, ingredientes, cb){
    cb(ingredientes = ingredientes.filter((i) => i.id !== id))
}

const añadirIngredientes = function(e, ingredientes, cb, igrGlobal){
    const ingredienteSelect = igrGlobal.find((i) => i.name === e.target.value)
    let prueba = []
    for(const ele of ingredientes){
        if(ele.name === ingredienteSelect.name){
            prueba.push(ele)
        }
    }
    
    
    if(prueba.length > 0){
        prueba = []
    }else{
        ingredienteSelect.cantidad = 1
        cb(ingredientes = [...ingredientes, ingredienteSelect])
    }
}

const cambiarCantidad = function(e, id, ingredientes, cb){
    const ingredienteSelect = ingredientes.find((i) => i.id === id)
    ingredienteSelect.cantidad = e.target.value
    let copiaIngredientes = [...ingredientes]
    copiaIngredientes = copiaIngredientes.filter((i) => i.id !== id)
    copiaIngredientes = [...copiaIngredientes , ingredienteSelect]
    
    cb(ingredientes = [...copiaIngredientes])
    
    
}
const crearBurguer = function(precio, cb, ingredientes, setIngredientsAdd){
    let sumaTotal = 0
    for(const ele of ingredientes){
        let {cantidad} = ele
        sumaTotal += (ele.price * cantidad) 
    }
    cb(precio = sumaTotal)
    setIngredientsAdd(ingredientes = [{id: 10000, name:'pan', price: 0.5, cantidad: 2}])
    alert(`su hamburguesa tiene un precio de: ${  sumaTotal}`)
}   

function AddBurger(estado){
    const {ingredients} = estado
    const [ingredientsAdd, setIngredientsAdd] = useState([{id: 10000, name:'pan', price: 0.5, cantidad: 2}])
    const [precio, setPrecio] = useState(0.0)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getIngredients())
    })

    return(
        <div>
            <h1>Arma tu Hamburguesa</h1>

            <select name="ingredientes" onChange={(e) => añadirIngredientes(e, ingredientsAdd, setIngredientsAdd, ingredients)}>
            <option key={1000} disabled="">Escoge tus ingredientes</option>
            {ingredients.map((i) => (
                    <option key={i.id} value={i.name}>{i.name}</option>
                ))}
            </select>
            
            <div>
                <ul>
                    {ingredientsAdd.map((i) => (
                        <div key={i.id}>
                            <li key={i.id}>{i.name}</li>
                            <button key={i.id} onClick={() => modificarIngredientes(i.id, ingredientsAdd, setIngredientsAdd)} disabled={i.id === 10000}>X</button>
                            <span>Cantidad</span>
                            <input type="number" min={1} max={10} disabled={i.id === 10000} onChange={(e) => cambiarCantidad(e, i.id, ingredientsAdd, setIngredientsAdd)}/>
                        </div>
                        ))}
                </ul>
            </div>
            
            <button onClick={() => crearBurguer(precio, setPrecio, ingredientsAdd, setIngredientsAdd)}>Crear Hamburguesa</button>

        </div>
    )
}

export default connect(mapStateToProps)(AddBurger)