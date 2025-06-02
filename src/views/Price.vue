<template>
  <div class="price-page">
    <div class="price-container">
      <h1>Цены в школе "Мамонт"</h1>
      
      <div class="price-table">
        <table>
          <thead>
            <tr>
              <th>Тип абонемента</th>
              <th>Дети</th>
              <th>Взрослые</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>На месяц</td>
              <td>3 000 ₽</td>
              <td>3 500 ₽</td>
            </tr>
            <tr>
              <td>Разовое занятие</td>
              <td>300 ₽</td>
              <td>350 ₽</td>
            </tr>
            <tr>
              <td>На 3 месяца</td>
              <td>7 000 ₽</td>
              <td>8 000 ₽</td>
            </tr>
          </tbody>
        </table>
        
        <div class="price-link">
          Подробнее можно ознакомиться 
          <a href="https://vk.com/uslugi-213566813?screen=group" target="_blank" rel="noopener noreferrer">
            тут
          </a>
        </div>
      </div>
      
      <div class="secondary-price">
        <h2>Цены в ФК "Мандарин"</h2>
        <img 
          src="https://sun9-77.userapi.com/impg/hu0RbS9-onhmylieCep_edcIwDPoyM0SXY1BFA/LyMzNzrNqx0.jpg?size=1080x1920&quality=95&sign=4d242a38f3b3ef52ad68689ffe5c6978&type=album" 
          alt="Прайс-лист ФК Мандарин" 
          class="price-image"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricePage',
  metaInfo: {
    title: 'Цены - Школа бокса "Мамонт"'
  }
}
</script>

<style scoped>
.price-page {
  padding: 2rem;
  background-color: #ffffff;
  min-height: 100vh;
}

.price-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1, h2 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
  margin-top: 3rem;
}

.price-table {
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.1rem;
}

th, td {
  padding: 1.2rem;
  text-align: center;
}

thead {
  background-color: #b88218;
  color: white;
}

tbody tr:nth-child(even) {
  background-color: #f8f8f8;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

.price-link {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  padding-bottom: 15px;
}

.price-link a {
  color: #b88218;
  text-decoration: none;
  font-weight: bold;
}

.price-link a:hover {
  text-decoration: underline;
}

.secondary-price {
  margin-top: 3rem;
  text-align: center;
}

.price-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0.5rem auto;
  border: 1px solid #eee;
  border-radius: 4px;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  th, td {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
  
  .price-image {
    max-width: 90%;
  }
}
</style>