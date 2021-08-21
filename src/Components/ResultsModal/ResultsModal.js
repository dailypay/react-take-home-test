import './styles.css';
import Col from 'react-bootstrap/Col';
import get from 'lodash/get';
import kebabCase from 'lodash/kebabCase';
import map from 'lodash/map';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Row from 'react-bootstrap/Row';

const EMPTY_CATEGORY = { items: [], title: '' };
const MODAL_TITLE = 'SUCCESS';
const NO_WINNER_NAME = 'Nobody';

export default function ResultsModal({ onHide, ...props }) {
  return (
    <Modal show={props.show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{MODAL_TITLE}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {map(props.selections, (nomineeId, categoryId) => {
          const category = props.categories.find(
            category => category.id === categoryId,
          ) || EMPTY_CATEGORY;

          const categoryWinner = get(
            category.items.find(item => item.id === nomineeId),
            'title',
            NO_WINNER_NAME,
          );

          const { title } = category;

          return (
            <Row
              key={`modal-${kebabCase(title)}-${kebabCase(categoryWinner)}`}
            >
              <Col>
                <h5>The winner of {title} is: {categoryWinner}!</h5>
              </Col>
            </Row>
          );
        })}
      </Modal.Body>
    </Modal>
  );
}
