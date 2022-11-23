import { render } from '@testing-library/react'

import NotFound from '../pages/NotFound'

const renderComponent = () => {
  return render(<NotFound />);
};

describe('renders NotFound page', () => {
  it('renders all component', () => {
    const { getByText } = renderComponent();

    expect(getByText(/Not Found/i)).toBeInTheDocument();
    expect(getByText(/The page does not exist/i)).toBeInTheDocument();
  })
});
