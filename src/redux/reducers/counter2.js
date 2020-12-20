const initialState = {
    counter777: 250
}

export default function counter2 (state = initialState, action) {

    switch(action.type) {
        case "ADD2":
        return {
            counter777: state.counter777 + action.payload
        }
        case "SUB2":
            return {
                counter777: state.counter777 -  action.payload
            }
        
        default:
            return state
    }
}