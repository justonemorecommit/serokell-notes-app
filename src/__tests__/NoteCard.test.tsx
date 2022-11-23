import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import NoteCard from '../components/NoteCard'
import store from '../store'

const mockNote = {
  id: 1,
  title: 'This is the title',
  description: 'This is the description'
}

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <NoteCard note={mockNote} />
      </BrowserRouter>
    </Provider>
  );
};

describe('renders NoteCard', () => {
  it('renders all component', () => {
    const { getByText } = renderComponent();

    expect(getByText(/This is the title/i)).toBeInTheDocument();
    expect(getByText(/This is the description/i)).toBeInTheDocument();
  })
});
