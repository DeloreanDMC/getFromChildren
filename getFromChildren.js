// Фильтрует массив из дочерних элементов по определенному критерию
// options - объект с параметрами - которые должны присутствовать у дочернего элемента
const getFromChildren = (children, options) => {
    return children.filter(el => {
        return Object.entries(options)
               .every(par => {
                   return el[par[0]] === par[1];
               }) 
    })
}
