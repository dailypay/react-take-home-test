import noop from 'lodash/noop';
import { render } from '@testing-library/react';
import Categories from '../Categories';
import { categories as categoriesFixture } from '../fixture';

const defaultProps = {
  categories: categoriesFixture,
  onClick: noop,
  selections: [],
};

function renderComponent(props = {}) {
  return render(
    <Categories {...props} />
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
