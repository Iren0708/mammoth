<template>
    <div class="contacts-page">
      <div class="contacts-container">
        <div class="contacts-image">
          <img 
            src="https://sun9-73.userapi.com/impg/oCeiKjrTYj3-EYtAp5UCHywguJNpnPHT9T4FIw/EmtkjIzRUII.jpg?size=807x807&quality=95&sign=1fbf36bf5ca73143a76d5a572eddd7e0&type=album" 
            alt="Тренер школы бокса"
            class="trainer-photo"
          >
        </div>
        
        <div class="contacts-info">
          <h1>Контакты</h1>
          
          <div class="contact-card">
            <h2>Наши залы:</h2>
            <div class="contact-item">
              <span class="contact-label">ФК "Мандарин":</span>
              <a href="https://vk.com/fkmandarin29?from=groups" target="_blank" rel="noopener noreferrer" class="contact-link">
                vk.com/fkmandarin29
              </a>
            </div>
            <div class="contact-item">
              <span class="contact-label">Школа бокса "Мамонт":</span>
              <a href="https://vk.com/mammoth_boxing_school?from=groups" target="_blank" rel="noopener noreferrer" class="contact-link">
                vk.com/mammoth_boxing_school
              </a>
            </div>
          </div>
          
          <div class="contact-card">
            <h2>Телефон для связи:</h2>
            <div class="contact-item">
              <span class="contact-label">Тренер:</span>
              <a href="tel:+79991680000" class="contact-phone">8 999 168 -- --</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactsPage',
    metaInfo: {
      title: 'Контакты - Школа бокса "Мамонт"'
    }
  }
  </script>
  
  <style scoped>
  .contacts-page {
    padding: 2rem;
    margin-top: 1px;
    min-height: calc(100vh - 180px);
  }
  
  .contacts-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 3rem;
    align-items: center;
  }
  
  .contacts-image {
    flex: 1;
  }
  
  .trainer-photo {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .contacts-info {
    flex: 1;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
    color: #b88218;
    margin-bottom: 1rem;
  }
  
  .contact-card {
    background-color: #f8f8f8;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  .contact-item {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  
  .contact-label {
    font-weight: lighter;
    margin-right: 0.5rem;
    min-width: 150px;
    color: #333;
  }
  
  .contact-link, .contact-phone {
    color: #2c3e50;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 1.1rem;
  }
  
  .contact-link:hover {
    color: #b88218;
    text-decoration: underline;
  }
  
  .contact-phone {
    font-weight: bold;
  }
  
  @media (max-width: 900px) {
    .contacts-container {
      flex-direction: column;
      gap: 2rem;
    }
    
    .contacts-image, .contacts-info {
      width: 100%;
    }
    
    .trainer-photo {
      max-width: 100%;
    }
  }
  
  @media (max-width: 600px) {
    .contacts-page {
      padding: 1rem;
      margin-top: 70px;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.3rem;
    }
    
    .contact-item {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .contact-label {
      margin-bottom: 0.3rem;
      min-width: auto;
    }
  }
  </style>