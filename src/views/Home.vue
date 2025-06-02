<template>
    <main class="home">
      <section class="hero" :style="heroStyle">
        <div class="hero-content">
          <h1>Школа бокса "Мамонт"</h1>
          <p>Профессиональные тренировки в Северодвинске</p>
          <router-link to="/price" class="cta-button">Начать тренировки</router-link>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    computed: {
      heroStyle() {
        return {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://zastavki.gas-kvas.com/uploads/posts/2024-09/zastavki-gas-kvas-com-8was-p-zastavki-na-rabochii-stol-boks-19.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    min-height: 100vh;
  }
  
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    padding: 0 20px;
  }
  
  .hero-content {
    max-width: 800px;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  .hero p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    display: inline-block;
    padding: 12px 30px;
    background-color: #b88218;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: lighter;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #d69a2a;
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    
    .hero p {
      font-size: 1.2rem;
    }
  }
  </style>