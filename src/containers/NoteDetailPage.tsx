import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../hooks'
import { getNote } from '../slices/noteSlice'
import { RootState } from '../store'
import { INoteResponse } from '../interface'
import NoteList from '../components/NoteList'
import NoteModal from '../components/NoteModal'

const NoteDetailPage: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const note = useAppSelector((state: RootState) => {
    return state.notesReducer.note;
  })

  useEffect(() => {
    dispatch(getNote(Number(id))).then((res: INoteResponse) => {
      if (!res.payload) navigate('/not-found')
    });
  }, [id]);

  return (
    <div className="note-detail-page page-container">
      {(note != null) && <NoteModal note={note} actionKey={'detail'} />}
      <NoteList />
    </div>
  );
};

export default NoteDetailPage;
