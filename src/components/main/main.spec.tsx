import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Main title="Next and Strapi Boilerplate" description="Boilerplate" />
    );

    expect(
      screen.getByRole('heading', { name: /Next and Strapi Boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    // renderiza o component
    const { container } = render(
      <Main title="Next and Strapi Boilerplate" description="Boilerplate" />
    );

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
