import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import NoteForm from '../components/NoteForm'
import store from '../store'

const mockNote = {
  id: 1,
  title: 'This is the title',
  description: 'This is the description'
}

describe('renders NoteForm', () => {
  it('renders all component when creating a new note', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NoteForm note={null} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByLabelText('Title')).toBeDefined();
    expect(getByLabelText('Description')).toBeDefined();
    expect(getByText(/Create/i)).toBeDefined();
    expect(getByText(/Cancel/i)).toBeDefined();
  })

  it('renders all component when updating a note', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NoteForm note={mockNote} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByLabelText('Title').value).toBe('This is the title')
    expect(getByLabelText('Description').value).toBe('This is the description')
    expect(getByText(/Update/i)).toBeDefined();
    expect(getByText(/Cancel/i)).toBeDefined();
  })
});

describe('check validations', () => {
  it('check validation when creating', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NoteForm note={null} />
        </BrowserRouter>
      </Provider>
    );

    await fireEvent.click(getByText(/Create/i));
    expect(getByText(/Please fill the inputs/i)).toBeInTheDocument();
  })

  it('check validation when updating', async () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NoteForm note={mockNote} />
        </BrowserRouter>
      </Provider>
    );

    await fireEvent.change(getByLabelText('Title'), { target: { value: '' } });
    await fireEvent.click(getByText(/Update/i));
    expect(getByText(/Please fill the inputs/i)).toBeInTheDocument();
  })
});
