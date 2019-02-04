import React from 'react'

const Form = ({ data, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Ingredients</label>
        <div className="control">
          <input
            className="input"
            placeholder="ingredients"
            name="ingredients"
            onChange={handleChange}
            value={data.ingredients}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input
            className="input"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={data.price}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input
            className="input"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={data.description}
          />
        </div>
      </div>
    </form>
  )
}
export default Form
