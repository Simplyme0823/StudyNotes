/** @format */

// 输入YYYY-MM-DD格式，输出是第几天

// 判断是否为闰年

function day(dates) {
  const [year, month, date] = dates.split("-");
  const isRun = isRunNian(year);
  const jDays = isRun ? 29 : 28;
  const monthDays = [31, jDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const prev = monthDays.reduce((prev, cur, index) => {
    if (index < Number(month) - 1) {
      prev = prev + cur;
    }
    return prev;
  }, 0);
  return prev + Number(date);
}

function isRunNian(years) {
  if (Number(years) % 100 === 0) {
    return Number(years) % 400 === 0;
  }
  return Number(years) % 4 === 0;
}

const res = day("2020-12-22");
console.log(res);
