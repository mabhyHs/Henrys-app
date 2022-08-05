const { Op } = require('sequelize');

/* devuelve la conversión de filtros en queriesDB*/
function setFilters(queries) {
    const convert = toDBQuery(validFilters(queries));
    return convert;   
}

function validFilters(filter){
    const filters = [];    

    for (const property in filter) {
        if(filter[property]){
            filters.push({[property]: filter[property] })
        }
    };

    return filters;
}

function toDBQuery(filters) {

    if(!filters || !filters.length){
        return undefined;
    }

    const queries = {
        [Op.and]: []          
    }

    filters.forEach(filter => {
        const property = Object.keys(filter)[0];

        if(property === "isDeleted"){

            if(filter["isDeleted"] === "true"){                
                //console.log("true")
                queries[Op.and].push({ deletedAt: {[Op.not]: null} });
            } else {
                //console.log("false")
                queries[Op.and].push({ deletedAt: { [Op.is]: null} });                
            }
        } 
        /* if(property === "isDeleted" && !property["isDeleted"]){
            console.log("false")
            queries[Op.and].push({...filter, [Op.is]: null});
        } */

        if(property === "isVeggie"){
            queries[Op.and].push(filter);
        } else {
            const format = {...filter}
            format[property] = { [Op.iLike]: `%${format[property]}%` };            
            queries[Op.and].push(format);
        }
    });

    return queries;   
}

function sort(order, array, property){

    if(!property){
        return array;
    }
  
    if(order === "desc"){
        return array.sort((a, b) => sortMajor(a[property], b[property]));
    }
    
    return array.sort((a, b) => sortMinor(a[property], b[property]));
}

function sortMinor(a, b){  
    return a - b;
} 

function sortMajor(a, b){  
    return sortMinor(b, a);
}

module.exports = {
    setFilters,
    sort
};
