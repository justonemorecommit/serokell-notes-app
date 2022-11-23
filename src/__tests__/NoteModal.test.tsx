import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import NoteModal from '../components/NoteModal'
import store from '../store'

const mockNote = {
  id: 1,
  title: 'This is the title',
  description: 'This is the description'
}

describe('renders NoteModal', () => {
  it('renders detail modal', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NoteModal note={mockNote} actionKey={'detail'} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText(/This is the title/i)).toBeDefined();
    expect(getByText(/This is the description/i)).toBeDefined();
    expect(getByText(/Update/i)).toBeDefined();
    expect(getByText(/Close/i)).toBeDefined();
  })

  it('renders edit modal', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NoteModal note={mockNote} actionKey={'edit'} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByLabelText('Title').value).toBe('This is the title')
    expect(getByLabelText('Description').value).toBe('This is the description')
    expect(getByText(/Update/i)).toBeDefined();
    expect(getByText(/Cancel/i)).toBeDefined();
  })
});
