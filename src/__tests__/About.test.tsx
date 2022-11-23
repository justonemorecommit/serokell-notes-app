import { render } from '@testing-library/react'

import About from '../pages/About'

const renderComponent = () => {
  return render(<About />);
};

describe('renders About page', () => {
  it('renders all component', () => {
    const { getByText } = renderComponent();

    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Lorem ipsum dolor amet/i)).toBeInTheDocument();
  })
});
