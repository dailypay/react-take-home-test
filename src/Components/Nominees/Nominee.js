import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classnames from 'classnames';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import kebabCase from 'lodash/kebabCase';
import noop from 'lodash/noop';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import partial from 'lodash/partial';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Nominee({
  nominee = {},
  onClick = noop,
  nominee: { id = '', title = '' } = {},
  ...props
} = {}) {
  const handleNomineeSelection = useCallback(
    partial(onClick, partial.placeholder, id),
    [onClick, id],
  );

  return (
    <Col xs={12} md={6} lg={4}>
      <Card
        className={classnames(
          'nominee-card',
          { selected: props.selection === id },
        )}
      >
        <Card.Body>
          <OverlayTrigger
            placement="top"
            overlay={(
              <Tooltip id={`tooltip-${kebabCase(title)}`}>{title}</Tooltip>
            )}
          >
            <Card.Title>{title}</Card.Title>
          </OverlayTrigger>
          <Image roundedCircle thumbnail src={nominee.photoUrl} />
          <Button onClick={handleNomineeSelection} size="lg" variant="primary">
            Select Button
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
