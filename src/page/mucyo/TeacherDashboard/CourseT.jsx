import React, { useState } from 'react'
// import './Course.css';
const Course = () => {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [description, setDescription] = useState('')
  const [modules, setModules] = useState([])

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  const handleModuleCodeChange = (event) => {
    setCode(event.target.value)
  }

  const handleModuleAdd = () => {
    setModules([...modules, { title: '', description: '' }])
  }

  const handleModuleTitleChange = (event, index) => {
    const newModules = [...modules]
    newModules[index].title = event.target.value
    setModules(newModules)
  }

  const handleModuleDescriptionChange = (event, index) => {
    const newModules = [...modules]
    newModules[index].description = event.target.value
    setModules(newModules)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // TODO: Submit form data to server
  }

  return (
    <div>
      <h2>Course Preparation</h2>
      <form onSubmit={handleFormSubmit}>
        <label className='label'>
          Title:
          <input className='form input' type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label className='label'>
          course code:
          <input className='form input' type="text" value={code} onChange={handleModuleCodeChange} />
        </label>
        <br />
        <label className='label'>
          Description course:
          <textarea className='form input' value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <h3>Modules</h3>
        {modules.map((module, index) => (
          <div key={index}>
            <label>
              Title:
              <input className='form input'
                type="text"
                value={module.title}
                onChange={(event) => handleModuleTitleChange(event, index)}
              />
            </label>
            <label>
              Course code:
              <input className='form input'
                type="text"
                value={module.code}
                onChange={(event) => handleModuleCodeChange(event, index)}
              />
            </label>
            <br />
            <label>
              Description:
              <textarea className='form input'
                value={module.description}
                onChange={(event) => handleModuleDescriptionChange(event, index)}
              />
            </label>
            <hr />
          </div>
        ))}
        <div className="module">
        <button type="button" onClick={handleModuleAdd}>
          Add Module
        </button>
        <button type="submit">Submit</button>
        </div>
      </form>
      <div className="form_button">
        <button>Free course</button>
        <button>Feature</button>
        <button>Status</button>
      </div>
    </div>
  )
}

export default Course
