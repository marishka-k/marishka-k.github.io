// Контакты. Пустой href — ссылка не показывается (впишите свою)
export const contacts = [
  { id: 'telegram', label: 'Telegram', href: 'https://t.me/m_kravchenko_dev' },
  { id: 'behance', label: 'Behance', href: 'https://www.behance.net/marinakravche9' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/marishka-k' },
  { id: 'habr', label: 'Хабр Карьера', href: 'https://career.habr.com/kramarvik' },
  { id: 'mail', label: 'Почта', href: '' },
];

export const visibleContacts = contacts.filter((c) => c.href);

export const navigation = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Проекты' },
  { href: '#experience', label: 'Опыт' },
  { href: '#contacts', label: 'Контакты' },
];
