import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaEllipsisV } from 'react-icons/fa'

import { useAppDispatch } from '../hooks'
import { INoteCardProps } from '../interface'
import { deleteNote } from '../slices/noteSlice'

const NoteCard: React.FC<INoteCardProps> = ({ note }): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showDetailNote = () => {
    navigate(`/notes/${note.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
    toast('Deleted successfully', { type: 'success' });
  };

  return (
    <div className="note-card">
      <div onClick={showDetailNote}>
        <h3>{note.title}</h3>
        <p>{note.description}</p>
      </div>
      <div className="justify-end">
        <div className="dropdown">
          <button className="dropbtn">
            <FaEllipsisV />
          </button>
          <div className="dropdown-content">
            <div onClick={handleDelete}>Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
