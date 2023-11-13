// import { useState } from "react";

// const Countdown = () => {
//   let today = new Date().toISOString().slice(0, 10);

//   const endDate = new Date("11/11/2023");
//   //   console.log(date.toDateString())
//   const startDate = today;
//   const diffInMs = new Date(endDate) - new Date(startDate);
//   const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
//   console.log(diffInMs);
//   console.log(diffInDays);
//   const [count, setCount] = useState(diffInMs);
//   return <div></div>;
// };

// export default Countdown;

import { useEffect, useState } from "react";

const Countdown = () => {
  function calculateTimeUntilNovember11() {
    // Set the target date to November 11, 2023
    const targetDate = new Date("2023-11-11T00:00:00Z");

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const difference = targetDate - currentDate;
    if (difference < 0) return { hours: 0, minutes: 0, seconds: 0 };
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Return the result as an object
    return {
      hours,
      minutes,
      seconds,
    };
  }

  const [count, setCount] = useState(calculateTimeUntilNovember11());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(calculateTimeUntilNovember11());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {count.hours}:{count.minutes}:{count.seconds}
    </div>
  );
};
export default Countdown;
