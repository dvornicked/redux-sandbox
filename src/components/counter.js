import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd}) => {
    return (
      <div className='container'>
        <h2 id="counter">{counter}</h2>
        <button onClick={dec} id="dec" className="btn btn-outline-primary">DEC</button>
        <button onClick={rnd} id="rnd" className="btn btn-outline-primary">RND</button>
        <button onClick={inc} id="inc" className="btn btn-outline-primary">INC</button>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, actions)(Counter)