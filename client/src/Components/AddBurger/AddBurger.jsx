/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, {useState} from "react";
import {connect} from 'react-redux'


// eslint-disable-next-line func-names
const mapStateToProps = function(state){
    return {ingredients: state.ingredients}
}
const modificarIngredientes = function(id, ingredientes, cb){
    // eslint-disable-next-line no-param-reassign
    cb(ingredientes = ingredientes.filter((i) => i.id !== id))
}
// eslint-disable-next-line func-names
const añadirIngredientes = function(e, ingredientes, cb, igrGlobal){
    const ingredienteSelect = igrGlobal.find((i) => i.name === e.target.value)
    // eslint-disable-next-line prefer-const
    let prueba = []
    // eslint-disable-next-line no-restricted-syntax
    for(const ele of ingredientes){
        if(ele.name === ingredienteSelect.name){
            prueba.push(ele)
        }
    }
    
    
    if(prueba.length > 0){
        prueba = []
    }else{
        ingredienteSelect.cantidad = 1
        // eslint-disable-next-line no-param-reassign
        cb(ingredientes = [...ingredientes, ingredienteSelect])
    }
}
// eslint-disable-next-line func-names
const cambiarCantidad = function(e, id, ingredientes, cb){
    const ingredienteSelect = ingredientes.find((i) => i.id === id)
    ingredienteSelect.cantidad = e.target.value
    const copiaIngredientes = [...ingredientes]
    // eslint-disable-next-line no-const-assign
    copiaIngredientes = copiaIngredientes.filter((i) => i.id !== id)
    // eslint-disable-next-line no-const-assign
    copiaIngredientes = [...copiaIngredientes , ingredienteSelect]
    
    // eslint-disable-next-line no-param-reassign
    cb(ingredientes = [...copiaIngredientes])
    
    
}
const crearBurguer = function(precio, cb, ingredientes, setIngredientsAdd){
    let sumaTotal = 0
    // eslint-disable-next-line no-restricted-syntax
    for(const ele of ingredientes){
        // eslint-disable-next-line prefer-const
        let {cantidad} = ele
        sumaTotal += (ele.price * cantidad) 
    }
    // eslint-disable-next-line no-param-reassign
    cb(precio = sumaTotal)
    // eslint-disable-next-line no-param-reassign
    setIngredientsAdd(ingredientes = [{id: 10000, name:'pan', price: 0.5, cantidad: 2}])
    // eslint-disable-next-line no-alert
    alert(`su hamburguesa tiene un precio de: ${  sumaTotal}`)
}   

function AddBurger(estado){
    const {ingredients} = estado
    const [ingredientsAdd, setIngredientsAdd] = useState([{id: 10000, name:'pan', price: 0.5, cantidad: 2}])
    const [precio, setPrecio] = useState(0.0)
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
            <h4>Precio Total ${precio}</h4>
            <button onClick={() => crearBurguer(precio, setPrecio, ingredientsAdd, setIngredientsAdd)}>Crear Hamburguesa</button>

        </div>
    )
}

export default connect(mapStateToProps)(AddBurger)