import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import NoteCreatePage from '../containers/NoteCreatePage'
import store from '../store'

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <NoteCreatePage />
      </BrowserRouter>
    </Provider>
  );
};

describe('renders NoteCreatePage', () => {
  it('renders NoteForm', () => {
    const { getByText, getByLabelText } = renderComponent();

    expect(getByLabelText('Title')).toBeDefined();
    expect(getByLabelText('Description')).toBeDefined();
    expect(getByText(/Create/i)).toBeInTheDocument();
    expect(getByText(/Cancel/i)).toBeInTheDocument();
  })
});
