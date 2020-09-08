import React from "react";
import NewComment from "./NewComment";

const commentSection = (props) =>
  <div id='commentSection'>
    <NewComment {...props} />
    {/*<Comments/>*/}
  </div>


export default commentSection;
