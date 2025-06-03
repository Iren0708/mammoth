<template>
  <header>
    <img src="https://sun9-45.userapi.com/impg/gejmRih331tkDBmCeBsRhbRck1tXxE4S-Lc2mg/amuUopdZc60.jpg?size=2560x2560&quality=95&sign=a9b080db87e9d9d528594d4b0862008c&type=album" alt="Мамонт">
    <nav>
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/price">Цены</router-link></li>
        <li><router-link to="/trener">О тренере</router-link></li>
        <li><router-link to="/schedule">Расписание</router-link></li>
        <li><router-link to="/blog">Блог</router-link></li>
        <li><router-link to="/contacts">Контакты</router-link></li>
      </ul>
    </nav>
    <UserPanel />
  </header>
</template>

<script>
import UserPanel from './UserPanel.vue' // Или правильный путь к вашему файлу

export default {
  name: 'Navbar',
  components: {
    UserPanel
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 100;
  letter-spacing: 0.5px;
}

a {
  text-decoration: none;
}

header a {
  color: black;
}

nav {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

header img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

header {
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  box-shadow: 0 5px 10px;
  z-index: 1000;
}

header ul {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  font-size: 22px;
}

header li {
  padding: 1px;
  font-size: 1.5rem;
}

header li:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 10px;
  }
  
  nav {
    width: 100%;
    margin: 10px 0;
  }
  
  header ul {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 18px;
    text-align: center;
    width: 100%;
  }
  
  header img {
    margin-bottom: 10px;
  }
}
</style>