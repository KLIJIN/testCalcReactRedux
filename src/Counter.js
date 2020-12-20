import React from "react"
import { connect} from 'react-redux'
import  { add2, sub2 } from "./redux/actions/actions"

const style =  {padding: 20, border: "1px solid #ccc"}
//компонента каунтер рендерит второй счетчик на странице
class Counter extends React.Component {
    
    render () {
        console.log("Counter.js render" , this.props)
        return (
            <div style = {style}  > 
                <h1>Counter {this.props.counter777}</h1>
                <div>
                    <button onClick={ () => this.props.onChange(1) }  >Add</button>    
                    <button onClick={ () => this.props.onChange2(1) }  >Sub</button>    
                </div> 
               
            </div>
        )
    }
}

//функция возвращает стейт
function mapStateToProps(state) {
    console.log("Counter_mapStateToProps",state)
    return {
        counter777: state.counter2.counter777
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
    onChange: number => dispatch(add2(number)),
    onChange2: number => dispatch(sub2(number))
    }
}

export default connect (mapStateToProps, mapDispatchToProps )  (Counter);