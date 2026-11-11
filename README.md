# Марина Кравченко — сайт-визитка

Веб-разработчик со знаниями UI/UX-дизайнера: от макета в Figma до работающего сайта на React.

**Сайт:** https://marishka-k.github.io/

## Проекты

| Проект | Что это | Сайт | Код |
|---|---|---|---|
| YouMeal | Доставка еды: меню с фильтрами, корзина, оформление | [открыть](https://marishka-k.github.io/Food_project/) | [Food_project](https://github.com/marishka-k/Food_project) |
| Yes | Интернет-магазин пляжной одежды | [открыть](https://marishka-k.github.io/Yes_project/) | [Yes_project](https://github.com/marishka-k/Yes_project) |
| Botlegger | Редизайн сайта роботизированного бара | [открыть](https://marishka-k.github.io/Botlegger_project/) | [Botlegger_project](https://github.com/marishka-k/Botlegger_project) |
| Самолёт | Диджитал-карточки для разговора | [открыть](https://marishka-k.github.io/Samolet_project/) | [Samolet_project](https://github.com/marishka-k/Samolet_project) |
| CUSTODI | Интернет-магазин рубашек на Tilda | [открыть](https://project21735976.tilda.ws/) | — |

## Стек

React 18 · Vite 5 · CSS Modules · БЭМ · адаптив на медиазапросах

## Запуск

```bash
npm install
npm run dev
npm run deploy   # сборка и публикация на GitHub Pages (ветка gh-pages)
```

## Структура

```
src/
  data/          # тексты: о себе, проекты, опыт, контакты — правки только здесь
  components/    # Header, Hero, About, Projects, ProjectCard, Experience, ExperienceCard, Contacts, Footer, Button, Icon …
  styles/global.css   # цвета, шрифты, размеры для мобильной / лаптопа / десктопа
  utils/         # стаж работы считается автоматически
public/images/   # иллюстрация и обложки проектов
```
