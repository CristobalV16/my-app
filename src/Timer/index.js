import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Hora de Juego</h1>
      <p>PC N°1</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Corriendo' : 'Tiempo Pausado'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 1hora minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 3600);
        restart(time)
      }}>Restart</button>
    </div>    
  );
}

function MyTimer2({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hora de Juego</h1>
        <p>PC N°2</p>
        <div style={{fontSize: '100px'}}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? 'Corriendo' : 'Tiempo Pausado'}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 1hora minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 1800);
          restart(time)
        }}>Restart</button>
      </div>
  
    );
  }

  function MyTimer3({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hora de Juego</h1>
        <p>PC N°3</p>
        <div style={{fontSize: '100px'}}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? 'Corriendo' : 'Tiempo Pausado'}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 1hora minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 5400);
          restart(time)
        }}>Restart</button>
      </div>
  
    );
  }


  
export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800); // 1hora minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
      <MyTimer2 expiryTimestamp={time} />
      <MyTimer3 expiryTimestamp={time} />
    </div>
  );
}