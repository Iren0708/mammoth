<template>
    <div class="schedule-page">
      <h1 class="schedule-title">Расписание тренировок</h1>
      
      <div class="schedule-wrapper">
        <table class="schedule-table">
          <thead>
            <tr>
              <th>Зал</th>
              <th>Пн</th>
              <th>Вт</th>
              <th>Ср</th>
              <th>Чт</th>
              <th>Пт</th>
              <th>Сб</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="gym-cell">
                <a href="https://vk.com/fkmandarin29" 
                   target="_blank" 
                   rel="noopener"
                   class="gym-link">
                  ФК "Мандарин"
                </a>
              </td>
              <td class="time-cell">
                17:30-19:00 (дети)<br>
                19:00-20:30 (смешанная)
              </td>
              <td></td>
              <td class="time-cell">
                17:30-19:00 (дети)<br>
                19:00-20:30 (смешанная)
              </td>
              <td></td>
              <td class="time-cell">
                17:30-19:00 (дети)<br>
                19:00-20:30 (смешанная)
              </td>
              <td></td>
            </tr>
            <tr>
              <td class="gym-cell">
                <a href="https://vk.com/mammoth_boxing_school" 
                   target="_blank" 
                   rel="noopener"
                   class="gym-link">
                  Мамонт
                </a>
              </td>
              <td></td>
              <td class="time-cell">18:00-19:30 (дети)</td>
              <td></td>
              <td class="time-cell">18:00-19:30 (дети)</td>
              <td></td>
              <td class="time-cell">18:00-19:30 (дети)</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div class="schedule-footer">
        <p>Подробности: 
          <a href="https://vk.com/mammoth_boxing_school" 
             target="_blank" 
             rel="noopener"
             class="details-link">
            ВКонтакте
          </a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SchedulePage'
  }
  </script>
  
  <style scoped>
  .schedule-page {
    padding: 20px;
    max-width: 1000px;
    margin: 1px auto 0;
    font-family: Arial, sans-serif;
  }
  
  .schedule-title {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2em;
  }
  
  .schedule-wrapper {
    overflow-x: auto;
    margin-bottom: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }
  
  th, td {
    padding: 12px 8px;
    text-align: center;
    border: 1px solid #e0e0e0;
  }
  
  th {
    background-color: #b88218;
    color: white;
    font-weight: lighter;
  }
  
  .gym-cell {
    background-color: #f5f5f5;
    font-weight: bold;
    min-width: 120px;
  }
  
  .time-cell {
    background-color: #f9f9f9;
    min-width: 100px;
  }
  
  .gym-link, .details-link {
    color: #2c3e50;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .gym-link:hover, .details-link:hover {
    color: #b88218;
  }
  
  .schedule-footer {
    text-align: center;
    margin-top: 20px;
    font-size: 1.1em;
  }
  
  @media (max-width: 768px) {
    .schedule-page {
      padding: 15px;
      margin-top: 70px;
    }
    
    .schedule-title {
      font-size: 1.7em;
      margin-bottom: 20px;
    }
    
    th, td {
      padding: 8px 5px;
      font-size: 0.9em;
    }
  }
  
  @media (max-width: 480px) {
    .schedule-title {
      font-size: 1.5em;
    }
    
    .schedule-footer {
      font-size: 1em;
    }
  }
  </style>