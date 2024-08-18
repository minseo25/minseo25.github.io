import React from 'react';
import prev from '../../assets/images/left_arrow.png';
import next from '../../assets/images/right_arrow.png';

const Month = ({ currentDate, setCurrentDate }) => {
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()));
  };

  return (
    <div className="flex items-center justify-between w-full mb-3">
      <img src={prev} alt="Prev" className="w-6 h-6 cursor-pointer" onClick={handlePrevMonth} />
      <span className="text-xl font-semibold text-gray-200">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
      <img src={next} alt="Next" className="w-6 h-6 cursor-pointer" onClick={handleNextMonth} />
    </div>
  );
};

export default Month;
