<template>
    <div class="blog-router-view">
      
      <div class="blog-articles">
        <!-- Главная статья -->
        <article class="main-article">
          <div class="article-visual">
            <img 
              src="https://sun9-54.userapi.com/impg/fsXrA9qkEONmL5xQmXQSNqvS3BwUdD8_rCJGNw/iBMZHqb5Qcs.jpg?size=1280x960&quality=95&sign=67cf0fc6079980e88d0353370e019a56&type=album" 
              alt="Боксеры с медалями"
              class="image-placeholder"
              style="width:100%; height:100%; object-fit:cover;object-position: top;"
            />
          </div>
          <div class="article-body">
            <h2>Наши боксеры завоевали 6 медалей</h2>
            <time datetime="2024-02-23" class="article-meta">23 февраля 2024</time>
            <p class="article-excerpt">
              На турнире ко Дню защитника Отечества наши ученики показали выдающиеся результаты. 
              Золотые медали завоевали: Бабкин Ярослав, Перминов Максим и Ершов Вячеслав.
            </p>
            <router-link to="/blog/tournament" class="article-link">Читать полностью</router-link>
          </div>
        </article>
  
        <!-- Список статей -->
        <div class="articles-grid">
          <article 
            v-for="item in articles" 
            :key="item.id" 
            class="article-card"
          >
            <div class="card-visual">
              <div class="image-placeholder"></div>
            </div>
            <div class="card-body">
              <h3>{{ item.title }}</h3>
              <time :datetime="item.datetime" class="card-meta">{{ item.date }}</time>
              <router-link :to="'/blog/' + item.slug" class="card-link">Подробнее</router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogView',
    data() {
      return {
        articles: [
          {
            id: 1,
            title: 'Набор в детскую группу 8-12 лет',
            date: '20 февраля 2024',
            datetime: '2024-02-20',
            slug: 'kids-group'
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
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Базовые стили только для области router-view */
  .blog-router-view {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .blog-heading {
    font-size: 2rem;
    color: #333;
    text-align: center;
    margin: 0 0 30px 0;
    padding-bottom: 15px;
    position: relative;
  }
  
  .blog-heading::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #b88218;
  }
  
  .blog-articles {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Стили главной статьи */
  .main-article {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 15px rgba(0,0,0,0.1);
  }
  
  .article-visual {
    width: 100%;
    height: 300px;
  }
  
  .article-body {
    padding: 25px;
  }
  
  /* Сетка статей */
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
  }
  
  .article-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .article-card:hover {
    transform: translateY(-5px);
  }
  
  .card-visual {
    width: 100%;
    height: 180px;
  }
  
  /* Общие стили для изображений-заглушек */
  .image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f5f5f5, #e0e0e0);
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    color: #333;
    font-weight: bold;
  }
  
  /* Стили текстового контента */
  .article-body,
  .card-body {
    padding: 20px;
  }
  
  .article-meta,
  .card-meta {
    display: block;
    color: #666;
    font-size: 0.85rem;
    margin: 8px 0 15px;
  }
  
  .article-link,
  .card-link {
    display: inline-block;
    color: #b88218;
    font-weight: lighter;
    
    text-decoration: none;
    margin-top: 15px;
    transition: color 0.3s;
  }
  
  .article-link:hover,
  .card-link:hover {
    color: #d69a2a;
  }
  
  /* Адаптивность */
  @media (max-width: 900px) {
    .main-article {
      flex-direction: column;
    }
    
    .article-visual {
      height: 250px;
    }
  }
  
  @media (max-width: 600px) {
    .blog-router-view {
      padding: 15px;
    }
    
    .articles-grid {
      grid-template-columns: 1fr;
    }
    
    .blog-heading {
      font-size: 1.8rem;
    }
  }
  </style>