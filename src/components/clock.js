import React from "react";

import AnalogClock from "./analog-clock";
import { TimeContext } from "./time-context";

function Clock() {
  const { time } = React.useContext(TimeContext);

  return <AnalogClock time={time} />;
}

export default Clock;
