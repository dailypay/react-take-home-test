import { render } from '@testing-library/react';
import Nominee from '../Nominee';
import { nominee as nomineeFixture } from '../fixture';

const defaultProps = { nominee: nomineeFixture };

function renderComponent(props = {}) {
  return render(
    <Nominee {...props} />
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
