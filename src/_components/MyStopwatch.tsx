import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'


function MyStopwatch(props: any) {
  const isCounting = useSelector((state: any) => state.counting.isCountingPaused)
  const isRecording = useSelector((state: any) => state.recording.value);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    var interval : any;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    setTime(0);
    setRunning(true);
  }, [isRecording])

  useEffect(() => {
    setRunning(!isCounting)
  }, [isCounting])
  
  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  );
}

export default MyStopwatch;