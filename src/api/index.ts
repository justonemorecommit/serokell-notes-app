import axios from 'axios'
import { toast } from 'react-toastify'

import { INote } from '../interface'

const API = axios.create({ baseURL: 'http://localhost:5000/' });

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    toast('Error', { type: 'error' });
    throw err.response.data;
  }
);

export const getNoteList = async () => await API.get('/notes')
export const createNote = async (note: Omit<INote, 'id'>) => await API.post('/notes', note);
export const deleteNote = async (id: number) => await API.delete(`/notes/${id}`);
export const getNote = async (id: number) => await API.get(`/notes/${id}`);
export const updateNote = async (note: INote) => await API.put(`/notes/${note.id}`, note);
