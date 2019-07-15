import React, { useState } from "react";
import "./App.css";


function QuarterTracker () {
 const [quarter, setQuarter] = useState(1);

  return (

    <div className= "quarterButtons">
      <div className="quarter__value">{quarter}</div>
      <button className="quarterAddButton" onClick = {() => setQuarter(quarter + 1)}>add Quarter</button>
      <button className="quarterRemoveButton" onClick ={() => setQuarter(quarter -1)}>Remove Quarter</button>
</div>

  )


}

export default QuarterTracker
