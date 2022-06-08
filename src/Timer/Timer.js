import { useEffect } from "react";

const timer = (Time) => {
    const countDownDate = new Date(Time).getTime();

    const [time ,setTime] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime( countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);

    }, [countDownDate]);

    return getReturnValues(countdown);
};

const getReturnValues = (countDown) => {    
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
  };