import React from "react";

function DisplayIdeas (props) {
  
  
  return(
    <div>
      <ul>
        {props.ideas.map((idea, i) => <li key={i}>{idea}</li>)}
      </ul>
    </div>
  )
}

export default DisplayIdeas