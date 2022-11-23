import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'
import { getNotes } from '../slices/noteSlice'
import { RootState } from '../store'
import NoteCard from './NoteCard'

const NoteList: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  const notes = useAppSelector((state: RootState) => {
    return state.notesReducer.notes;
  })

  return (
    <div className="note-list">
      {(notes.length > 0)
        ? (
          notes.map((note, index) => <NoteCard note={note} key={index} />)
        )
        : (
          <div className="no-data">No Data</div>
        )}
    </div>
  );
};

export default NoteList;
