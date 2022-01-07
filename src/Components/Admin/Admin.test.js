import { render } from '@testing-library/react';
import Admin from './Admin';

test('renders the admin page/new dog', () => {
  const container = render(<Admin />);
  expect(container).toMatchSnapshot();
});
