// move this into a folder you think appropriate for example in: './page/home' or keep it outside if it's not just for one page.

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collection, CollectionItem, Button, Card, Badge } from 'react-materialize';

import { fetchDiscussionThisWeek } from '../action/discussionThisWeekAction';

import '../css/discussion-this-week.css';

class DiscussionThisWeek extends React.Component {

  constructor(props) {
    super(props);
    this.changeTypeToDisplay = this.changeTypeToDisplay.bind(this);
  }

  componentDidMount() {
    this.props.fetchDiscussionThisWeek('ALL');
  }

  changeTypeToDisplay(typeToDisplay) {
    this.props.fetchDiscussionThisWeek(typeToDisplay);
  }

  render() {
    var typeToDisplay = this.props.typeToDisplay;
    var buttons = ['ALL', 'FEATURED', 'HOT', 'MY_REGION'].map((item, index) =>
    <Button key={item} className={typeToDisplay !== item ? 'grey lighten-4' : ''} onClick={() => this.changeTypeToDisplay(item)}>
        {item.replace("_", " ")}
      </Button>
    );
    var questions = this.props.questions.map((item, index) => <CollectionItem href="#" key={item.id}>
    {item.title}
    {item.badge ? <Badge className="white-text teal">{item.badge}</Badge>: '' }
    </CollectionItem>);
    return (
      <Card className="discussion-this-week">
        <Row>
          <Col s={6}><span className="title">Discussion This Week</span></Col>
          <Col s={6} className="header-buttons">
            {buttons}
          </Col>
        </Row>
        <Collection>
          {questions}
        </Collection>
      </Card>
    );
  }

}

const bindStateToProperty = (state) => ({
  questions: state.discussionThisWeek.questions,
  typeToDisplay: state.discussionThisWeek.typeToDisplay
});
const bindActionToPeroperty = (dispatch) => ({
  fetchDiscussionThisWeek: (typeToDisplay) => dispatch(fetchDiscussionThisWeek(typeToDisplay))
});

export default connect(bindStateToProperty, bindActionToPeroperty)(DiscussionThisWeek);
