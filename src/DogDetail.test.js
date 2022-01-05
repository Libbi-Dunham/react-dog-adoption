import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Dog from './DogDetail';

test('renders the dog details', () => {
  const container = render(
    <MemoryRouter>
      <Dog
        dog={{
          name: 'Happy',
          image: 'https://placedog.net/500?id=21',
          age: '2',
          breed: 'French Bulldog',
          bio: 'A sweet but stinky guy',
        }}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
