import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
import NotificationList from "./Notification"

function mapDispatchToProps(dispatch) {
  // console.log(dispatch)
  return {
    addArticle: (article) => { console.log(article) ;return dispatch(addArticle(article))},
    // foundBadWord: (message) => (dispatch(foundBadWord()))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      id: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.id);
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({
      title: this.state.title,
      id: id
    })
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <NotificationList />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;