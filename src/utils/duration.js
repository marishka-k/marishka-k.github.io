// Стаж между датами («2022-11» … «2024-06» или до сегодня), включая оба месяца: «1 год и 8 месяцев»
const plural = (n, [one, few, many]) => {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
};

export function formatDuration(start, end) {
  const [sy, sm] = start.split('-').map(Number);
  const to = end ? end.split('-').map(Number) : [new Date().getFullYear(), new Date().getMonth() + 1];
  const total = (to[0] - sy) * 12 + (to[1] - sm) + 1;
  const years = Math.floor(total / 12), months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} ${plural(years, ['год', 'года', 'лет'])}`);
  if (months) parts.push(`${months} ${plural(months, ['месяц', 'месяца', 'месяцев'])}`);
  return parts.join(' и ');
}

const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
export const formatMonth = (ym) => { const [y, m] = ym.split('-').map(Number); return `${MONTHS[m - 1]} ${y}`; };
