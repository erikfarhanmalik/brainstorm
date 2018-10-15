import React from 'react';
import { Row, Col } from 'react-materialize';

import DiscussionThisWeek from '../DiscussionThisWeek';

class HomePage extends React.Component {

  render() {
    return (
      <Row>
        <Col s={8}><DiscussionThisWeek /></Col>
        <Col s={4}></Col>
      </Row>
    );
  }

}

export default HomePage;
