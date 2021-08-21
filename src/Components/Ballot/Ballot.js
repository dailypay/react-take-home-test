import './styles.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React, { useCallback, useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import without from 'lodash/without';
import api from '../../Api/Api';
import Categories from '../Categories/Categories';
import ResultsModal from '../ResultsModal/ResultsModal';

const initialState = {
  categories: [],
  isAppHydrated: false,
  selections: {},
};

const PAGE_TITLE = 'AWARDS 2021';
export const SUBMIT_BALLOT_BUTTON_TEXT = 'SUBMIT BALLOT BUTTON';

export default function Ballot() {
  const [state, setState] = useState(initialState);
  const handleModalClose = useCallback(() => {
    setState({ ...state, areResultsDisplayed: false });
  }, [setState, state]);

  const handleNomineeSelection = useCallback((event, categoryId, nomineeId) => {
    setState({
      ...state,
      selections: {
        ...state.selections,
        [categoryId]: nomineeId,
      },
    });
  }, [setState, state]);

  const submitNomineeSelection = useCallback(() => {
    if (!state.areResultDisplayed) {
      setState({
        ...state,
        areResultsDisplayed: true,
      });
    }
  }, [setState, state])

  useEffect(async () => {
    if (!state.isAppHydrated) {
      const { items = [] } = await api.getBallotData();

      setState({ ...state, categories: items, isAppHydrated: true });
    }
  });

  return (
    <Row>
      <Col>
        <ResultsModal
          categories={state.categories}
          onHide={handleModalClose}
          selections={state.selections}
          show={state.areResultsDisplayed}
        />
        <div className="ballot">
          <Row>
            <Col>
              <h1 className="pt-5">{PAGE_TITLE}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Categories
                categories={state.categories}
                onClick={handleNomineeSelection}
                selections={state.selections}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="mt-2 mb-3 submit-ballot-button"
                onClick={submitNomineeSelection}
                size="lg"
                variant="primary"
              >
                {SUBMIT_BALLOT_BUTTON_TEXT}
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
