import React from 'react'
import Card from './Card'

function Dashboard() {
    const data=[{
        head:" Earnings (Monthly)",
        price:"$40,000",
        clr:"primary"
    },{
        head:" Earnings (Annual)",
        price:"$215,000",
        clr:"success"
    },{
        head:"Tasks",
        price:"50%",
        clr:"warning"
    },{
        head:" Pending Requests",
        price:"18",
        clr:"danger"
    }]
  return (
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
                    
    <div className="row">
        {
            data.map((item)=>{
                return(
                <Card item={item} ></Card>
                );
            })
        }
    
    </div></div>
  )
}

export default Dashboard