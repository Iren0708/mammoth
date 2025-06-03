<template>
    <div class="blog-news-one">
      <div class="news-container">
        <!-- Кнопка "Назад" -->
        <router-link to="/blog" class="back-button">
          ← Вернуться к новостям
        </router-link>
  
        <!-- Заголовок новости -->
        <h1 class="news-title">{{ currentArticle.title }}</h1>
        
        <!-- Дата публикации -->
        <time :datetime="currentArticle.datetime" class="news-date">
          {{ currentArticle.date }}
        </time>
  
        <!-- Основное изображение -->
        <div class="news-image" v-if="currentArticle.id === 1">
          <img 
            src="https://sun9-54.userapi.com/impg/fsXrA9qkEONmL5xQmXQSNqvS3BwUdD8_rCJGNw/iBMZHqb5Qcs.jpg?size=1280x960&quality=95&sign=67cf0fc6079980e88d0353370e019a56&type=album" 
            alt="Боксеры с медалями"
            style="width:100%; max-height:500px; object-fit:cover; object-position: top;"
          />
        </div>
        <div class="news-image" v-else>
          <div class="image-placeholder"></div>
        </div>
  
        <!-- Полный текст новости -->
        <div class="news-content">
          <template v-if="currentArticle.id === 1">
            <p>На турнире ко Дню защитника Отечества наши ученики показали выдающиеся результаты.</p>
            <p>Золотые медали завоевали:</p>
            <ul>
              <li>Бабкин Ярослав</li>
              <li>Перминов Максим</li>
              <li>Ершов Вячеслав</li>
            </ul>
            <p>Серебряные награды получили:</p>
            <ul>
              <li>Иванов Дмитрий</li>
              <li>Петров Алексей</li>
            </ul>
            <p>Бронзовую медаль завоевал Смирнов Артем.</p>
          </template>
  
          <template v-else-if="currentArticle.id === 2">
            <p>Наши спортсмены показали отличные результаты на турнире в Архангельске.</p>
            <p>Главным достижением стало золото в весовой категории до 75 кг.</p>
          </template>
  
          <template v-else-if="currentArticle.id === 3">
            <p>Прошел мастер-класс от чемпиона России по боксу.</p>
            <p>Участники узнали новые техники и отработали их на практике.</p>
          </template>
  
          <template v-else-if="currentArticle.id === 4">
            <p>На региональном чемпионате наша команда завоевала серебряные медали.</p>
            <p>Это отличный результат для начинающих спортсменов.</p>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogNewsOne',
    data() {
      return {
        articles: [
          {
            id: 1,
            title: 'Наши боксеры завоевали 6 медалей',
            date: '23 февраля 2024',
            datetime: '2024-02-23',
            slug: 'tournament'
          },
          {
            id: 2,
            title: 'Золото на турнире в Архангельске',
            date: '15 февраля 2024',
            datetime: '2024-02-15',
            slug: 'gold-medals'
          },
          {
            id: 3,
            title: 'Мастер-класс от чемпиона',
            date: '10 февраля 2024',
            datetime: '2024-02-10',
            slug: 'master-class'
          },
          {
            id: 4,
            title: 'Серебро на региональном чемпионате',
            date: '5 февраля 2024',
            datetime: '2024-02-05',
            slug: 'silver-medals'
          }
        ],
        currentArticle: {}
      }
    },
    created() {
      this.loadArticle()
    },
    watch: {
      '$route.params.slug': 'loadArticle'
    },
    methods: {
      loadArticle() {
        const slug = this.$route.params.slug
        this.currentArticle = this.articles.find(article => article.slug === slug) || {}
      }
    }
  }
  </script>
  
  <style scoped>
  .blog-news-one {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .back-button {
    display: inline-block;
    margin-bottom: 20px;
    color: #b88218;
    text-decoration: none;
    font-weight: 600;
    font-weight: lighter;
    transition: color 0.3s;
  }
  
  .back-button:hover {
    color: #d69a2a;
  }
  
  .news-container {
    background: #fff;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 3px 15px rgba(0,0,0,0.1);
  }
  
  .news-title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .news-date {
    display: block;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 30px;
  }
  
  .news-image {
    width: 100%;
    height: 400px;
    margin-bottom: 30px;
    overflow: hidden;
    border-radius: 4px;
  }
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f5f5f5, #e0e0e0);
  }
  
  .news-content {
    line-height: 1.6;
    color: #333;
  }
  
  .news-content p {
    margin-bottom: 15px;
  }
  
  .news-content ul {
    margin-bottom: 15px;
    padding-left: 20px;
  }
  
  @media (max-width: 768px) {
    .news-title {
      font-size: 1.6rem;
    }
    
    .news-image {
      height: 250px;
    }
    
    .news-container {
      padding: 20px;
    }
  }
  </style>