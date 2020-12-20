import React, {Component} from 'react'
import './App.scss'
import Counter from "./Counter"
import {connect} from 'react-redux'
import  {add, sub , multip , add_number } from "./redux/actions/actions"



class App extends Component {

  render() {
    console.log("APP_render", this.props)
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.ololololDec}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить </button>
          <button onClick={() => this.props.onSub()}>Вычесть </button>
          <button onClick={this.props.onMulipe}> умножить </button>
        </div>

        
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15 </button>
          <button onClick={() => this.props.onSub()}>Вычесть </button>

        </div>

      <Counter/>

      </div>
    )
  }
}



function mapStateToProps(state) {
  console.log("App.js_mapStateToProps3",state)
  return {
      ololololDec: state.counter1.counter5

  }
}

function mapDispatchToProps(dispatch) {
  //console.log("App.js_mapDispatchToProps:", dispatch)
  return {
    onAdd: () => dispatch(add()), 
    onSub: () => dispatch( sub()),
    onAddNumber: number => dispatch(add_number(number)),
    onMulipe: () => dispatch( multip())
   // onMulipe: () => dispatch({type: 'MULTIP'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)
















