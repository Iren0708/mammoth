<template>
  <div class="registration-form">
    <h3>Записаться на тренировку</h3>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="fullName">ФИО:</label>
        <input 
          type="text" 
          id="fullName" 
          v-model="formData.fullName" 
          required
        >
      </div>
      
      <div class="form-group">
        <label for="phone">Номер телефона:</label>
        <input 
          type="tel" 
          id="phone" 
          v-model="formData.phone" 
          required
        >
      </div>
      
      <div class="form-group">
        <label>Группа:</label>
        <select v-model="formData.group" required>
          <option value="adult">Взрослая</option>
          <option value="child">Детская</option>
        </select>
      </div>
      
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
      formData: {
        fullName: '',
        phone: '',
        group: 'adult',
        userId: null
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        // Добавляем ID пользователя, если он авторизован
        if (this.$store.state.user && this.$store.state.user.id === 3) {
          this.formData.userId = 3;
        }

        const response = await fetch('http://localhost:3010/api/registrations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          alert('Заявка отправлена успешно!');
          this.formData = {
            fullName: '',
            phone: '',
            group: 'adult',
            userId: null
          };
        } else {
          throw new Error('Ошибка при отправке заявки');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке заявки');
      }
    }
  }
}
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>