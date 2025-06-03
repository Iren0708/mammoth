<template>
  <div class="app">
    <!-- Фиксированный навбар -->
    <Navbar />
    
    <!-- Основной контент (роутер) -->
    <main class="main-content">
      <router-view />
    </main>
    
    <!-- Футер -->
    <footer class="footer">
      <div class="footer-content">
        <div class="social-links">
          <a href="#" class="social-link"><i class="fa fa-facebook"></i></a>
          <a href="#" class="social-link"><i class="fa fa-instagram"></i></a>
          <a href="#" class="social-link"><i class="fa fa-youtube"></i></a>
          <a href="#" class="social-link"><i class="fa fa-twitter"></i></a>
        </div>
        
        <div class="footer-links">
          <router-link to="/contacts" class="footer-link">Связаться с нами</router-link>
          <a href="#" class="footer-link">Политика конфиденциальности</a>
          <a href="#" class="footer-link">Условия использования</a>
        </div>
        
        <div class="copyright">
          Северодвинск 2023-{{ new Date().getFullYear() }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import Trainer from './views/Trainer.vue';
import Price from './views/Price.vue';
import UserPanel from './views/UserPanel.vue';

export default {
  name: 'App',
  components: {
    Navbar,Price,Trainer,UserPanel,
  }
}
</script>

<style>
/* Базовые стили */
:root {
  --primary-color: #b88218;
  --dark-color: #333;
  --light-color: #f8f8f8;
  --footer-bg: #000;
  --footer-text: #aaa;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 100;
  letter-spacing: 0.5px;
}

body {
  line-height: 1.6;
  color: #333;
  background-color: #fff;
}

/* Основная структура */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding:  0;
  margin-top: 1px; /* Отступ под фиксированный навбар */
}

/* Стили футера */
.footer {
  background-color: var(--footer-bg);
  color: var(--footer-text);
  padding: 2rem 0;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
}

.social-link {
  color: var(--footer-text);
  transition: color 0.3s;
}

.social-link:hover {
  color: #fff;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.footer-link {
  color: var(--footer-text);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #fff;
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Адаптивность */
@media (max-width: 768px) {
  .main-content {
    margin-top: 80px;
    padding: 1rem 0;
  }
  
  .footer-content {
    gap: 1rem;
  }
  
  .social-links {
    font-size: 1.2rem;
    gap: 1rem;
  }
  
  .footer-links {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
}

</style>