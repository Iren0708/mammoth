<template>
  <main class="home">
    <section class="hero" :style="heroStyle">
      <div class="hero-content">
        <h1>Школа бокса "Мамонт"</h1>
        <p>Профессиональные тренировки в Северодвинске</p>
        <div class="buttons-container">
          
          <button class="cta-button signup-button" @click="showRegistrationForm = true">
            Записаться на тренировку
          </button>
        </div>
      </div>
    </section>

    <!-- Форма регистрации -->
    <div v-if="showRegistrationForm" class="modal-overlay">
      <div class="registration-modal">
        <button class="close-button" @click="showRegistrationForm = false">×</button>
        <h3>Форма записи</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>ФИО:</label>
            <input 
              type="text" 
              v-model="registrationForm.fullName" 
              required
              placeholder="Введите ваше полное имя"
            >
          </div>
          
          <div class="form-group">
            <label>Телефон:</label>
            <input 
              type="tel" 
              v-model="registrationForm.phone" 
              required
              placeholder="+7 (XXX) XXX-XX-XX"
            >
          </div>
          
          <div class="form-group">
            <label>Группа:</label>
            <select v-model="registrationForm.group" required>
              <option value="adult">Взрослая</option>
              <option value="child">Детская</option>
            </select>
          </div>
          
          <button type="submit" class="submit-button">Отправить заявку</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import RegistrationService from '../plugins/api/services/RegistrationService';

export default {
  name: 'Home',
  data() {
    return {
      showRegistrationForm: false,
      registrationForm: {
        fullName: '',
        phone: '',
        group: 'adult'
      }
    }
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://zastavki.gas-kvas.com/uploads/posts/2024-09/zastavki-gas-kvas-com-8was-p-zastavki-na-rabochii-stol-boks-19.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  },
  methods: {
    async handleSubmit() {
  try {
    const formData = {
      FullName: this.registrationForm.fullName,
      Phone: this.registrationForm.phone,
      Group: this.registrationForm.group,
      UserId: this.$store.state.user?.id === 3 ? 3 : null
    };

    const response = await RegistrationService.createRegistration(formData);
    
    // Проверяем структуру ответа
    if (response?.success) {
      alert('Ваша заявка принята! Мы свяжемся с вами в ближайшее время.');
      this.showRegistrationForm = false;
      this.resetForm();
    } else {
      // Если сервер вернул ошибку в response.error
      const errorMessage = response.error || 'Неизвестная ошибка сервера';
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    
    // Правильное отображение ошибки
    let errorMessage = 'Произошла ошибка при отправке заявки';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null) {
      // Пытаемся извлечь сообщение из объекта ошибки
      errorMessage = error.message || JSON.stringify(error);
    }
    
    alert(`Ошибка: ${errorMessage}`);
  }
},
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

.buttons-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}



.cta-button:hover {
  background-color: #d69a2a;
}

.signup-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #b88218;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: lighter;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #9f6236;
}

/* Стили для модального окна */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.registration-modal {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  position: relative;
  color: #333;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  background-color: #b88218;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #369f6d;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }

  .buttons-container {
    flex-direction: column;
    gap: 10px;
  }
}
</style>