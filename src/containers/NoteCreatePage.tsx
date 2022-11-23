import React from 'react'
import NoteForm from '../components/NoteForm'

import NoteList from '../components/NoteList'

const NoteCreatePage: React.FC = (): JSX.Element => {
  return (
    <div className="note-create-page page-container">
      <div className="note-create-form-wrapper">
        <NoteForm note={null} />
      </div>
      <NoteList />
    </div>
  );
};

export default NoteCreatePage;
