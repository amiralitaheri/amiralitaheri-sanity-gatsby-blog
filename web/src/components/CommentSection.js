import React from "react";
import NewComment from "./NewComment";
import Comments from "./comments";

const commentSection = (props) =>
  <div id='commentSection'>
    <NewComment {...props} />
    <Comments {...props}/>
  </div>


export default commentSection;
