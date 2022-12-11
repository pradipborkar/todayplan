import React from 'react'

const Plan = (props) => {
  return (
    <div className="row">
        <div className="col-sm-9">
              <li className="list-unstyled m-3 p-3 shadow text-white">{props.value}</li>
        </div>
        <div className="col-sm-3">
              <button 
                  onClick={() => props.deleteEle(props.id)}
              className="btn btn-danger m-3 p-3 shadow text-white"
              >X
              </button>
        </div>
    </div>
   
  )
}

export default Plan