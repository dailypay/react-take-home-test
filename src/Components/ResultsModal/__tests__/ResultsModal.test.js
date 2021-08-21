import { render } from '@testing-library/react';
import ResultsModal from '../ResultsModal';

const defaultProps = {};

function renderComponent(props = {}) {
  return render(
    <ResultsModal {...props} />
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