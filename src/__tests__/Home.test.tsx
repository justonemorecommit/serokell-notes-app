import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Home from '../containers/Home'
import store from '../store'

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
};

describe('renders Home page', () => {
  it('renders \'Take Note\' button', () => {
    const { getByText } = renderComponent();

    expect(getByText(/Take Note/i)).toBeInTheDocument();
  })
});
