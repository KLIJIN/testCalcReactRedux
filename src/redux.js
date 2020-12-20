const redux = require("redux")

const initialState = {
    counter: 0
}
//Reducer 
//редьюсер это джаваскрипт функция, которая делает некоторые преобразования и возвращает стейт

const reducer = (state = initialState, action) => {

    if(action.type === "ADD") {
        return {
            counter: state.counter +1
        }
    }

    if(action.type === "DIC") {
        return {
            counter: state.counter - 999
        }
    }
    return state
}

//Store  библиотека/помойка где хранятся все даные. Весь стейт всего приложения хранится в одном месте/файле
 
//как создать стор? создаем функцию и передаем в неё сущность редьюсер:
const store = redux.createStore(reducer)

console.log( "1", store.getState());

//Actions

//меняет состояния стора


store.dispatch(addCounter);
console.log("2", store.getState())

const addCounter = {type: "ADD"}

store.dispatch( { type: "DIC" });
console.log("3", store.getState())