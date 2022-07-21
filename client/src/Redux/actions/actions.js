import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT"
export const  GET_BURGERS = "GET_BURGERS"
export const GET_COMBOS = "GET_COMBOS"
export const GET_BEVERAGES = "GET_BEVERAGES"
export const GET_INGREDIENTS = "GET_INGREDIENTS"
export const GET_POTATOES = "GET_POTATOES"
export const GET_VEGGIE = "GET_VEGGIE"
// export const CREATE_BURGER = "CREATE_BURGER"
// export const CREATE_COMBO = "CREATE_ COMBO"
// export const CREATE_BEVERAGE = "CREATE_BEVERAGE"
//https://vimeo.com/510792531/20d64d4a98
//ACCIONES GET

export function getProduct(id){
    return async function(dispatch){
        var json = await axios("http://pending..." + id)
        try{
            return dispatch({
                type: GET_PRODUCT,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function getBurgers(){
    return async function(dispatch){
        var json = await axios("http://pending...")

        try{
            return dispatch({
                type: GET_BURGERS,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function getCombos(){
    return async function(dispatch){
        var json = await axios("http://pending...")

        try{
            return dispatch({
                type: GET_COMBOS,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function getBeverages(){
    return async function(dispatch){
        var json = await axios("http://pending...")

        try{
            return dispatch({
                type: GET_BEVERAGES,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}
export function getIngredients(){
    return async function(dispatch){
        var json = await axios("http://pending...")

        try{
            return dispatch({
                type: GET_INGREDIENTS,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function getPotatoes(){
    return async function(dispatch){
        var json = await axios("http://pending...")

        try{
            return dispatch({
                type: GET_POTATOES,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export function getVeggie(){
    return async function(dispatch){
        var json = await axios("http://pending...")

        try{
            return dispatch({
                type: GET_VEGGIE,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

//ACCIONES POST



export function createBurger(payload){
    return async function(){
        const json = await axios.post("https://pending...", payload)
        return json;
    }
}

export function createCombo(payload){
    return async function(){
        const json = await axios.post("https://pending...", payload)
        return json;
    }
}

export function createBeverage(payload){
    return async function(){
        const json = await axios.post("https://pending...", payload)
        return json;
    }
}