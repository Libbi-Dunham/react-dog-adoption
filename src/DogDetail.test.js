import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Dog from './DogDetail';

test('renders the dog details', () => {
  const container = render(
    <MemoryRouter>
      <Dog
        dog={{
          name: 'Miklo',
          image: 'https://placedog.net/1000/563?id=90',
          age: '2',
          breed: 'pitbull mix',
          bio: 'Goofy and fun guy',
        }}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
