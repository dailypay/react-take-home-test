import noop from 'lodash/noop';
import { render } from '@testing-library/react';
import CategoryNominees from '../CategoryNominees';
import { categories as categoriesFixture } from '../fixture';

const defaultProps = {
  nominees: categoriesFixture[0].items,
  onClick: noop,
  selection: undefined,
};

function renderComponent(props = {}) {
  return render(
      <CategoryNominees {...props} />
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
