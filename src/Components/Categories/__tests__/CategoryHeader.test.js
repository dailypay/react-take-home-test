import { render } from '@testing-library/react';
import CategoryHeader from '../CategoryHeader';

const defaultProps = {
  title: 'test category',
};

function renderComponent(props = {}) {
  return render(
      <CategoryHeader {...props} />
  );
}

describe('default behavior', () => {
  let props;
  let renderer;

  beforeEach(() => {
    props = { ...defaultProps };
    renderer = renderComponent(props);
  });

  test('should match the snapshot', () => {
    expect(renderer).toMatchSnapshot();
  });
});
