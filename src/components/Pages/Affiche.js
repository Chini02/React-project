import React from 'react'

function Affiche() {
  
  return (
    <div className='container py-2'>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Code Service</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Ville:</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="submit" className="btn btn-dark">Add Service</button>
      </form>
    </div>
  )
}

export default Affiche
