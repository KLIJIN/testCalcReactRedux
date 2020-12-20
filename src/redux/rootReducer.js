import counter1  from ".//reducers/counter1.js"
import counter2 from ".//reducers/counter2.js"
import {combineReducers} from 'redux'

export default combineReducers ( {
     counter1, counter2

})

