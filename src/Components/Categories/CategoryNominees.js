import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Nominee from '../Nominees/Nominee';

export default function CategoryNominees(props) {
  return (
    <Row>
      {props.nominees.map(nominee => (
        <Nominee
          key={nominee.id}
          nominee={nominee}
          onClick={props.onClick}
          selection={props.selection}
        />
      ))}
    </Row>
  );
}
