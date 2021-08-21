import { render } from '@testing-library/react';
import App from './App';

const defaultProps = {};

function renderComponent(props) {
  return render(
    <App {...props} />
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
