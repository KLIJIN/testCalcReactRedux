import { ADD, MULTIP, SUB, ADD_NUMBER } from "../actions/actionTypes"

const initialState = {
    counter5: 1
}

export default function counter1 (state = initialState, action) {

    switch(action.type) {
        case ADD:
        return {
            counter5: state.counter5 + 1
        }
        case SUB:
            return {
                counter5: state.counter5 - 1
            }
        case MULTIP:
            return {
             counter5: state.counter5  * 5 
        }
        case ADD_NUMBER:
            return {
                counter5: state.counter5  + action.payload
        }
        default:
            return state
    }
}