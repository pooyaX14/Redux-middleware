import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log(state)
  return { message: state.message };
};

const Notification = ({ message }) => {
  // console.log({articles})
 
return(
  <div>
    {message}
  </div>
)};
const NotificationList = connect(mapStateToProps)(Notification);
export default NotificationList;