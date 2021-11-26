const publications = {
  el: '#publications',
  data() {
      return {
        urlPublications: './img/publications/sale/',
        arrayPublications: [
          {
            title: 'Искусство цвета',
            autor: 'Иттен, Иоханнес',
            sale: 620,
            img: ['sale_1.jpg', 'sale_1@2.jpg', 'sale_1@3.jpg'],
          },
          {
            title: 'Типографика',
            autor: 'Рудер, Эмиль',
            sale: 2450,
            img: ['sale_2.jpg', 'sale_2@2.jpg', 'sale_2@3.jpg'],
          },
          {
            title: 'Книга про буквы',
            autor: 'Гордон, Юрий',
            sale: 2200,
            img: ['sale_3.jpg', 'sale_3@3.jpg', 'sale_3@3.jpg'],
          },
          {
            title: 'Николай Ильин',
            autor: 'Кричевский, Владимир',
            sale: 1100,
            img: ['sale_4.jpg', 'sale_4@3.jpg', 'sale_4@3.jpg'],
          },
          {
            title: 'Модульные сетки в граф...',
            autor: 'Мюллер-Брокманн, Йозеф',
            sale: 1450,
            img: ['sale_5.jpg', 'sale_5@3.jpg', 'sale_5@3.jpg'],
          },
          {
            title: 'Эволюция графических ст...',
            autor: 'Хеллер, Чваст',
            sale: 3200,
            img: ['sale_6.jpg', 'sale_6@3.jpg', 'sale_6@3.jpg'],
          },
          {
            title: 'Искусство и визуальное в...',
            autor: 'Арнхейм, Рудольф',
            sale: 2200,
            img: ['sale_7.jpg', 'sale_7@3.jpg', 'sale_7@3.jpg'],
          },
        ],
      }
  },


}

new Vue(publications);


