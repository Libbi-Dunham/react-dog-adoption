import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import Dog from './DogDetail.js';

test('renders the dog details', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/1']}>
      <Route path="/dogs/:id" component={Dog} />
    </MemoryRouter>
  );
  await screen.findByText('Miklo');
  expect(container).toMatchSnapshot();
});
