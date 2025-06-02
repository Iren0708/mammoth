<template>
    <div class="trainer-page">
      <div class="trainer-container">
        <img 
          src="https://sun9-73.userapi.com/impg/oCeiKjrTYj3-EYtAp5UCHywguJNpnPHT9T4FIw/EmtkjIzRUII.jpg?size=807x807&quality=95&sign=1fbf36bf5ca73143a76d5a572eddd7e0&type=album" 
          alt="Тренер" 
          class="trainer-photo"
        >
  
        <div class="trainer-info">
          <h1>Образование:</h1>
          <p>В 2021 году получен диплом о профессиональной переподготовке от главного тренера БК Китэк Андреевой С.М. г. Москвы</p>
          <p>В 2022 году получено удостоверение о повышении квалификации по авторскому курсу Андрея (Бупаса) Ивичука, действующего тренера мирового уровня. В основе курса личный опыт Андрея и его собственный тренерский взгляд на современный бокс.</p>
          
          <h2>Заслуги:</h2>
          <ul class="achievements-list">
            <li>Победитель областных и международных чемпионатов по кикбоксингу</li>
            <li>Неоднократный победитель и призёр на Открытом Чемпионате и Первенстве Санкт-Петербурга по кикбоксингу</li>
            <li>Тренировался под руководством Шеленкова Тараса Викторовича, тренера сборной России по кикбоксингу</li>
            <li>Тренерская деятельность с 2013 года</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TrainerPage'
  }
  </script>
  
  <style scoped>
  .trainer-page {
    padding: 2rem;
    margin-top: 10px;
  }
  
  .trainer-container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .trainer-photo {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .trainer-info {
    width: 100%;
    max-width: 800px;
  }
  
  h1, h2 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #444;
  }
  
  .achievements-list {
    list-style-type: disc;
    padding-left: 2rem;
    margin-top: 1rem;
  }
  
  .achievements-list li {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    color: #444;
  }
  
  @media (max-width: 768px) {
    .trainer-page {
      padding: 1rem;
      margin-top: 70px;
    }
    
    h1 {
      font-size: 1.8rem;
    }
    
    h2 {
      font-size: 1.6rem;
    }
    
    p, .achievements-list li {
      font-size: 1rem;
    }
    
    .trainer-container {
      gap: 1.5rem;
    }
  }
  </style>