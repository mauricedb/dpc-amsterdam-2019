import React from "react";

import AnalogClock from "./analog-clock";
import { TimeContext } from "./time-context";

function Clock() {
  return (
    <div>
      <TimeContext.Consumer>
        {({ time }) => <AnalogClock time={time} />}
      </TimeContext.Consumer>
    </div>
  );
}

export default Clock;
