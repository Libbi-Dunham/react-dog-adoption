import { render } from '@testing-library/react';
import DogList from './DogList';

test('renders the dogs', () => {
  const container = render(<DogList dogs={[]} />);
  expect(container).toMatchSnapshot();
});
