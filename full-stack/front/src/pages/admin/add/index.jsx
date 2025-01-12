import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';

const Add = () => {
  return (
    <div>
        <Formik
      initialValues={{ title: '', description: '' ,lor: ''}}
      onSubmit={async (values, actions) => {
        await axios.post("http://localhost:8000/api/data", values)
        actions.resetForm();
        
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          {/* <input
            type="number"
            placeholder='id'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values._id}
            name="id"
          /> */}
          <input
            type="text"
            placeholder='title'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.title}
            name="title"
          />
          <input
            type="text"
            placeholder='description'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.description}
            name="description"
          />
          <input
            type="text"
            placeholder='lor'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.lor}
            name="lor"
          />
          {props.errors.title && <div id="feedback">{props.errors.title}</div>}
          <button type="submit">Submit</button>
        </form>

        
      )}
    </Formik>
    </div>
  )
}

export default Add