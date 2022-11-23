import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from '../layout/Header'
import store from '../store'

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
};

describe('renders Header', () => {
  it('renders all component', () => {
    const { getByText } = renderComponent();

    expect(getByText(/Todo App/i)).toBeInTheDocument();
    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Home/i)).toBeInTheDocument();
  })
});
