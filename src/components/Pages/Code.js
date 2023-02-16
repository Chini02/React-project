import React , {useEffect, useState}from 'react'

function Code(tableData ) {
    /////////////////////////////////////////////////
    const [adata , setData] = useState([])
    useEffect(()=>{
      const fetchData = async ()=>{
        const res = await fetch('data.json')
        const data = await res.json()
        setData(data)
      }
      fetchData()
    },[])
    
    //////////////////////////////////////////////

  
   
  return (
    <div className="d-grid gap-3 py-3">
        <div className="p-2 bg-light border">
            <div className="input-group py-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">Code Service:</span>
                </div>
                <input type="text" className="form-control" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"  type="button">Button</button>
                </div>
            </div>
        </div>
        <div className="p-2 bg-light border">
            <div className="input-group-prepend">
                    <h2 className="" >Ville:</h2>
                    <span>##Afiiche##</span>
            </div>
        </div>
        <div className="p-2 bg-light border">
            <div className="input-group-prepend">
                    <h2 className="" id="">Charger:</h2>
                    <span>##Afiiche##</span>
            </div>
        </div>
        <div className="p-2 bg-light border">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom</th>
                <th scope="col">Salaire</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        </div>
    </div>
    
  )
}

export default Code
