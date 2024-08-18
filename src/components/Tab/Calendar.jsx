import React, { useState } from 'react';
import Month from './Month';
import {DateActive, DateInactive, DateSpecial, DateToday} from './Date';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const specialDates = [
    [4, 25, "My Birthday~~"], // May 25th
  ];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // 1일에 해당하는 요일 (0: Sun, ... 6: Sat)
  const days = Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() }, (_, i) => i + 1); // 다음달의 0일, 즉 이번달의 마지막 날짜
  const daysWithNulls = Array.from({ length: firstDayOfMonth }).fill(null).concat(days);

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear();
  }

  const specialDay = (day) => {
    const specialDate = specialDates.find(([month, date]) => day === date && currentDate.getMonth() === month);
    return specialDate ? specialDate[2] : null;
  }

  return (
    <div className='flex flex-col'>
      <Month currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <div className="grid grid-cols-7 gap-4 mb-6">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="w-8 h-8 flex text-md items-center justify-center text-gray-400">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4">
        {daysWithNulls.map((day, index) => {
          if(day === null) {
            return <div key={index} className="w-8 h-8"></div>;
          } else if(currentDate.getDate() === day) {
            return <DateActive key={index} day={day} currentDate={currentDate} setCurrentDate={setCurrentDate} />;
          } else if(specialDay(day)) {
            return <DateSpecial key={index} day={day} currentDate={currentDate} setCurrentDate={setCurrentDate} special={specialDay(day)} />;
          } else if(isToday(day)) {
            return <DateToday key={index} day={day} currentDate={currentDate} setCurrentDate={setCurrentDate} />;
          } else {
            return <DateInactive key={index} day={day} currentDate={currentDate} setCurrentDate={setCurrentDate} />;
          }
        })}
      </div>
    </div>
  );
};

export default Calendar;
