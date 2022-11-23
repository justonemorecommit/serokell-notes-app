import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as api from '../api'
import { INote } from '../interface'

interface NoteState {
  notes: INote[]
  note: INote | null
}

const initialState = {
  notes: [],
  note: null
} as NoteState;

export const getNotes = createAsyncThunk<INote[], void>('/notes', async () => {
  const res = await api.getNoteList();
  return res.data;
})

export const createNote = createAsyncThunk<INote, Omit<INote, 'id'>>(
  '/notes/new',
  async (note) => {
    const res = await api.createNote(note);
    return res.data;
  }
);

export const deleteNote = createAsyncThunk<number, number>(
  '/notes/delete',
  async (id) => {
    await api.deleteNote(id);
    return id;
  }
);

export const getNote = createAsyncThunk<INote, number>(
  '/notes/get',
  async (id) => {
    const res = await api.getNote(id);
    return res.data;
  }
);

export const updateNote = createAsyncThunk<INote, INote>(
  '/notes/update',
  async (note) => {
    const res = await api.updateNote(note);
    return res.data;
  }
);

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
    })

    builder.addCase(createNote.fulfilled, (state, action) => {
      state.notes = [...state.notes, action.payload];
    })

    builder.addCase(deleteNote.fulfilled, (state, action) => {
      state.notes = state.notes.filter((note) => {
        return note.id !== action.payload;
      })
    });

    builder.addCase(getNote.fulfilled, (state, action) => {
      state.note = action.payload;
    })

    builder.addCase(updateNote.fulfilled, (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        } else return note;
      })
    });
  }
});

const { reducer } = noteSlice;
export default reducer;
