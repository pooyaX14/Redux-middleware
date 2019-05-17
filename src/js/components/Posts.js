import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

function mapStateToProps(state) {
  console.log(state);
  return {
    remoteArticles: state.remoteArticles.slice(0, 2)
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     getData: () => dispatch(getData())
//   }
// }
export class Post extends Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
         {this.props.remoteArticles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    )
  }
}
export default connect(
  mapStateToProps,
   { getData }
)(Post);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Post);