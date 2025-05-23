<template>
  <header>
    <img
      src="https://sun9-45.userapi.com/impg/gejmRih331tkDBmCeBsRhbRck1tXxE4S-Lc2mg/amuUopdZc60.jpg?size=2560x2560&quality=95&sign=a9b080db87e9d9d528594d4b0862008c&type=album"
      alt="Мамонт"
    />
    <nav>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="price.html">Цены</a></li>
        <li><a href="trener.html">О тренере</a></li>
        <li><a href="schedule.html">Расписание</a></li>
        <li><a href="#">Блог</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
  </header>
  <div class="fon">
    <div>
      <h2>
        Лучшая школа бокса<br />
        в Северодвинске
      </h2>
    </div>
    <div><button>Записаться на пробное занятие</button></div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 100;
  letter-spacing: 0.5px;
}
h2 {
  font-size: 4rem;
  color: #ffffff;
  height: 100px;
  width: 100%;
  text-align: center;
  padding-top: 10%;
}
p {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.963);
}

body a {
  color: white;
  padding-top: 12px;
}
header a {
  color: black;
}
nav {
  position: absolute;
  color: white;
  display: flex;
  justify-content: space-around;
  place-self: anchor-center;
  top: 10%;

  z-index: 3;
}

header img {
  width: 100px;
  height: 100px;
  margin-right: auto;
}

header {
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 0 10%;
  box-shadow: 0 5px 10px;
}
header ul {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  font-size: 22px;
}
header li {
  padding: 1px;
  font-size: 1.5 rem;
}
header li:hover {
  transform: scale(1.1);
}
h1 {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
