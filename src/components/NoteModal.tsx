import React from 'react'
import { useNavigate } from 'react-router-dom'

import { INoteModalProps } from '../interface'
import NoteForm from './NoteForm'

const NoteDetailModal: React.FC<INoteModalProps> = ({
  note,
  actionKey
}): JSX.Element => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/')
  };

  const handleUpdate = () => {
    navigate(`/notes/${note?.id}/edit`);
  };

  return (
    <>
      <div className="modal-overlay" id="modal-overlay"></div>
      <div className="detail-modal" id="modal">
        {actionKey === 'detail'
          ? (
            <div className="modal-guts">
              <h1>{note?.title}</h1>
              <p>{note?.description}</p>
              <div className="action-btns">
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleClose}>Close</button>
              </div>
            </div>
          )
          : (
            <div className="update-form">
              <NoteForm note={note} />
            </div>
          )}
      </div>
    </>
  );
};

export default NoteDetailModal;
