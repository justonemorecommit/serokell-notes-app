import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import './styles/App.scss'
import Layout from './layout'
import Home from './containers/Home'
import NoteCreatePage from './containers/NoteCreatePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import NoteDetailPage from './containers/NoteDetailPage'
import NoteUpdatePage from './containers/NoteUpdatePage'

const App: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes/new" element={<NoteCreatePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/notes/:id/edit" element={<NoteUpdatePage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Layout>
  );
};

export default App;
