import React from 'react';
import confetti from 'canvas-confetti';

export const DateActive = ({ day, currentDate, setCurrentDate }) => {
  const handleClick = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  }

  return (
    <div className="cursor-pointer w-8 h-8 flex items-center justify-center bg-red-500 rounded-full text-md text-white" onClick={handleClick}>
      {day}
    </div>
  );
};

export const DateInactive = ({ day, currentDate, setCurrentDate }) => {
  const handleClick = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  }

  return (
    <div className="cursor-pointer w-8 h-8 flex items-center justify-center text-md text-white" onClick={handleClick}>
      {day}
    </div>
  );
};

export const DateSpecial = ({ day, currentDate, setCurrentDate, special }) => {
  const handleClick = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));

    // confetti effect (Fireworks)
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    alert(special);
  }

  return (
    <div className="cursor-pointer w-8 h-8 flex items-center justify-center bg-green-500 rounded-full text-md text-white" onClick={handleClick}>
      {day}
    </div>
  );
}

export const DateToday = ({ day, currentDate, setCurrentDate }) => {
  const handleClick = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  }

  return (
    <div className="cursor-pointer w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full text-md text-white" onClick={handleClick}>
      {day}
    </div>
  );
}
