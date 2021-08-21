import './styles.css';
import Col from 'react-bootstrap/Col';
import partial from 'lodash/partial';
import React from 'react';
import Row from 'react-bootstrap/Row';
import CategoryHeader from './CategoryHeader';
import CategoryNominees from './CategoryNominees';

export default function Categories(props) {
  return (
    <Row>
      <Col>
        {props.categories.map(({ id, ...category }) => (
          <Row key={id}>
            <Col>
              <Row>
                <Col className="text-left">
                  <CategoryHeader title={category.title} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CategoryNominees
                    nominees={category.items}
                    onClick={partial(
                      props.onClick,
                      partial.placeholder,
                      id,
                    )}
                    selection={props.selections[id]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
}
