const now = new Date();
const isToday =
  now.getDate() === 16 && now.getMonth() === 11 && now.getFullYear() === 2024;
const isSpecialPeriod = (() => {
  const start = new Date(2024, 11, 24, 23, 0, 0);
  const end = new Date(2024, 11, 25, 1, 0, 0);
  return now >= start && now <= end;
})();
const isMorningPeriod = (() => {
  const start = new Date(2024, 11, 24, 12, 0, 0);
  const end = new Date(2024, 11, 24, 13, 0, 0);
  return now >= start && now <= end;
})();
if (isToday || isSpecialPeriod || isMorningPeriod) {
} else {
  document.body.innerHTML = `
    <div class="center">
      Vào đây ăn cức à!!!! Cúc@@@
    </div>
  `;
}
