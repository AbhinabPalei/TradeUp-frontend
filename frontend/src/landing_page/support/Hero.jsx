import React from 'react'

const Hero = () => {
  return (
      <div className="bg-light py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-3 mb-md-0">Support Portal</h2>
          <button className="btn btn-primary">My tickets</button>
        </div>
        <div className="d-flex justify-content-center">
          <div className="input-group w-100 w-md-75 w-lg-50">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
