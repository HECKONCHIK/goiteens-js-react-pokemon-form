import { useEffect, useRef, useState } from 'react';
import styles from './Clock.module.css';


export const Clock = () => {
 
  const [time, setTime] = useState(() => new Date())
  const intervalId = useRef(null);
  const inputRef = useRef(null);


  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => {
      stop();
    }


  }, [])

  const stop = () => {
    clearInterval(intervalId.current);
  };

  // componentDidMount() {
  //   this.intervalId = setInterval(() => {
     
  //     this.setState({ time: new Date() });
  //   }, 1000);
  // }

  // componentWillUnmount() {
    
  //   this.stop();
  // }

    return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Поточний час: {time.toLocaleTimeString()}
        </p>
        <form>
          <input type="text" name='name' ref={inputRef} />
          <button type='submit'>Send</button>
        </form>
        <button type="button" onClick={stop}>
          Зупитини
        </button>
      </div>
    );
}
