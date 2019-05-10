import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log(state)
  return { errors: state.errors };
};

const Notification = ({ errors }) => {
  console.log({errors})
//  const message = errors.map((msg) =>  <p>{msg}</p> )
return(
  <div>
    {errors}
  </div>
)};
const NotificationList = connect(mapStateToProps)(Notification);
export default NotificationList;