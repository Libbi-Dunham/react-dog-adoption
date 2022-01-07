import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogEdit from './DogEdit';

test('renders dog information', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/1/edit']}>
      <Route path="/dogs/:id/edit" component={DogEdit} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Miklo');
  expect(container).toMatchSnapshot();
});
