import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

import NoteList from '../components/NoteList'

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="home page-container">
      <Link to="/notes/new" className="create-btn">
        <FaPlus className="mr-3" /> Take Note
      </Link>
      <NoteList />
    </div>
  );
};

export default Home;
