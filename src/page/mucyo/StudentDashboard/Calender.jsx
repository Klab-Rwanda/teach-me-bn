import React, { useState } from "react";
// import "./calendar.css";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month, daysInMonth).getDay();
    const weeks = [];
    let week = [];
    let day = 1;

    // add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      week.push(null);
    }

    // add days of the month
    while (day <= daysInMonth) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
      day++;
    }

    // add empty cells for days after the last day of the month
    for (let i = lastDay; i < 6; i++) {
      week.push(null);
    }

    // add last week to weeks array if it's not already included
    if (week.length > 0 && week.length < 7) {
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }

    return weeks;
  };

  const prevMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    setDate(new Date(year, month, 1));
  };

  const nextMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    setDate(new Date(year, month, 1));
  };

  const weeks = getMonthData(date.getFullYear(), date.getMonth());

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={`${i}-${j}`}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
