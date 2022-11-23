import React, { BaseSyntheticEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { createNote, updateNote } from '../slices/noteSlice'
import { useAppDispatch } from '../hooks'
import { INoteProps, INoteResponse } from '../interface'

const NoteForm: React.FC<INoteProps> = ({ note }): JSX.Element => {
  const [state, setState] = useState({
    title: note?.title || '',
    description: note?.description || ''
  });
  const [validateError, setValidationError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (checkValidation()) {
      if (note?.title) {
        dispatch(updateNote({ ...state, id: note.id })).then(
          (res: INoteResponse) => {
            if (res.payload) toast('Updated successfully', { type: 'success' });
          }
        );
      } else {
        dispatch(createNote(state)).then((res: INoteResponse) => {
          if (res.payload) { toast('Created a new note successfully', { type: 'success' }); }
        });
      }

      setValidationError(false);
      setState({
        title: '',
        description: ''
      });
      navigate('/')
    } else {
      setValidationError(true);
    }
  };

  const checkValidation = () => {
    return state.title && state.description;
  };

  return (
    <div className="note-create-form">
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
        {validateError && <p className="error">Please fill the inputs.</p>}
        <div className="btn-group">
          <button className="btn" onClick={handleSubmit}>
            {note?.title ? 'Update' : 'Create'}
          </button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
