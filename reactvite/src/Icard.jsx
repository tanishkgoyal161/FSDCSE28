import react from 'react'

function ICard({data}) { 
    return (
        <div style={{border:'10px solid red',height:'300px',width:'300px'}}>
            <img src={data.pic} height="200" width="200"/>
            <h2>{data.collegeName}</h2>
            <h3>Roll NO.= {data.rollNo}</h3>
            <h4> Name: {data.name}</h4>
            <h4> Branch: {data.branch}</h4>
            <h4>Section: {data.section}</h4>
        </div>
    )
}

export default ICard