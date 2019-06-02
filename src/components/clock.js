import React from "react";

import AnalogClock from "./analog-clock";
import { TimeContext } from "./time-context";

function Clock() {
  return (
    <TimeContext.Consumer>
      {({ time }) => <AnalogClock time={time} />}
    </TimeContext.Consumer>
  );
}

export default Clock;
