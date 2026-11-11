// Контакты. Пустой href — ссылка не показывается (впишите свою)
export const contacts = [
  { id: 'telegram', label: 'Telegram', href: '' },
  { id: 'behance', label: 'Behance', href: '' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/marishka-k' },
  { id: 'hh', label: 'hh.ru', href: '' },
  { id: 'mail', label: 'Почта', href: '' },
];

export const visibleContacts = contacts.filter((c) => c.href);

export const navigation = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Проекты' },
  { href: '#experience', label: 'Опыт' },
  { href: '#contacts', label: 'Контакты' },
];
