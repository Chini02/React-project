import React , {useEffect, useState}  from 'react';


function About() {

  const [adata , setData] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch('data.json')
      const data = await res.json()
      setData(data)
      // console.log(data)
    }
    fetchData()
  },[])
 
  return (
    <div className="container mt-3">
      <table className="table table-dark table-hover" >
    <thead>
      <tr>
        <th>Code</th>
        <th>nbEmploye</th>
        <th>ville</th>
        <th>Total Sailre</th>
      </tr>
    </thead>
    <tbody>
      {adata.map((cData) =>{
          return (
            <tr key={cData.code}>
              <td>{cData.code}</td>
              <td>{cData.emplye.length}</td>
              <td>{cData.ville}</td>
              <td>{cData.emplye.reduce((total,cur)=>cur.salary+total,0)}</td>
            </tr>
          )
      })}
    </tbody>    
  </table>
    </div>
  )
}

export default About
