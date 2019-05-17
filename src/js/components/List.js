import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

const mapStateToProps = state => {
  console.log(state)
  return { articles: state.articles };
};

// const ConnectedList = ({ articles }) => {
  // console.log({articles})

class ConnectedList extends React.Component {
 render() {
    return(
      <ul className="list-group list-group-flush">
        { this.props.articles.map(el => { 
        return (
          <li className="list-group-item" key={el.id}  value={el.title}>
            {el.title}
          </li>

        )}
        )}
      </ul>
    )};
} 

const List = connect(mapStateToProps)(ConnectedList);
export default List;