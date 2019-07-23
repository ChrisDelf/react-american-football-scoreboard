import React, { useState } from 'react';
import './App.css';

function QuarterTracker({ quarter: { quarterValue, setQuarter } }) {
  // const [quarter, setQuarter] = useState(1);

  return (
    <div className="quarterButtons">

      <button
        className="quarterAddButton"
        onClick={() => setQuarter(quarterValue + 1)}
      >
        add Quarter
      </button>
      <button
        className="quarterRemoveButton"
        onClick={() => setQuarter(quarterValue - 1)}
      >
        Remove Quarter
      </button>
    </div>
  );
}

export default QuarterTracker;
