'use strict';

// auxiliar functions
function _minTwoDigits(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

function _truncateMonthName(monthName) {
  if (monthName.length <= 4) {
    return monthName;
  }

  return `${monthName.substring(0, 3)}.`
}

// main function
function formatDate(date) {
  const day = date.getDate();
  const formattedDay = _minTwoDigits(day);
  
  const monthName = date.toLocaleString('pt-BR', { month: 'long' });
  const formattedMonth = _truncateMonthName(monthName);

  const year = date.getFullYear();

  return `${formattedDay} ${formattedMonth} ${year}`;
}