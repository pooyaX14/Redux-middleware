import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
// console.log(state.errors)  
  return { err: state.errors };
};
// const mapDispatchToProps = ( dispatch ) => {
//   return {
//     name: "Purnima"
//   } 
// }
const Notification = ({err}) => {
  // console.log({err})
  // console.log({name})
//  const message = errors.map((msg) =>  <p>{msg}</p> )
return(
  <div>
   {err}
  </div>
)};
const NotificationList = connect(mapStateToProps)(Notification);
export default NotificationList;