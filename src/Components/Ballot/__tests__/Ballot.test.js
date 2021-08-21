import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import Ballot, { SUBMIT_BALLOT_BUTTON_TEXT } from '../Ballot';

jest.mock('../../../Api/Api');

const defaultProps = {};

function renderComponent(props = {}) {
  return render(
    <Ballot {...props} />
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

  describe('when I select a candidate', () => {
    beforeEach(() => {
      act(() => {
        fireEvent.click(renderer.getByText('Select Button'));
      });
    });

    describe('and I click the submit button', () => {
      beforeEach(() => {
        act(() => {
          fireEvent.click(renderer.getByText(SUBMIT_BALLOT_BUTTON_TEXT));
        });
      });

      test('I see a modal with the winner', () => {
        expect(renderer.getByText('SUCCESS')).toBeInTheDocument();
      });

      test('should match the snapshot', () => {
        expect(renderer).toMatchSnapshot();
      });
    });
  });
});
