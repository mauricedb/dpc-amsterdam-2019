import React, { createContext, useState, useEffect } from "react";

export const TimeContext = createContext();

export function TimeProvider({ children }) {
  const [time, setTime] = useState(new Date());
  useEffect(function() {
    const handle = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <TimeContext.Provider value={{ time }}>{children}</TimeContext.Provider>
  );
}
