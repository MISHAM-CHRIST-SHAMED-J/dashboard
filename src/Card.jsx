import React from 'react'

function Card({item}) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
    <div className={`card border-left-${item.clr} shadow h-100 py-2`}>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className={`text-xs font-weight-bold text-${item.clr} text-uppercase mb-1`}>
                        {item.head}</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{item.price}</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card