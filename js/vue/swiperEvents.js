const events = {
  el: '#events',
  data() {
      return {
        urlEvents: './img/events/',
        arrayEvents: [
          {
            title: 'Книжная гравюра в живом восприятии',
            text: 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо.',
            date: 'с 20 марта по 30 апреля',
            place: 'Музей им. Щусева',
            img: ['event_1.jpg', 'event_1@2.jpg', 'event_1@3.jpg'],
          },
          {
            title: '"Открытая дискуссия". Дмитрий Петров и Сергей Ильин.',
            text: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта.',
            date: '24 марта 19:00',
            place: 'ММОМА',
            img: ['event_2.jpg', 'event_2@2.jpg', 'event_2@3.jpg'],
          },
          {
            title: 'Выставка "Формация 2020"',
            text: 'Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании глубокомысленных рассуждений.',
            date: 'с 31 марта по 21 апреля',
            place: 'Еврейский музей',
            img: ['event_3.jpg', 'event_3@2.jpg', 'event_3@3.jpg'],
          },
          {
            title: 'XXIV Международная биеннале молодого искусства',
            text: 'Внезапно, реплицированные с зарубежных источников, современные исследования.',
            date: 'с 30 марта по 30 апреля',
            place: 'Третьяковка на Крымском валу',
            img: ['event_4.jpg', 'event_4@2.jpg', 'event_4@3.jpg'],
          },
          {
            title: 'Джон Винзор. Фотографии из серии "Метафора серебра"',
            text: 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо.',
            date: 'с 8 апреля по 20 мая',
            place: 'ММАМ',
            img: ['event_5.jpg', 'event_5@2.jpg', 'event_5@3.jpg'],
          }
        ],
      }
  },

  methods: {

    heightEventsDefault() {
      const itemHeight = document.querySelector('.events__item').clientHeight;
      const eventsList = document.querySelector('.events__list');
      eventsList.style.maxHeight = itemHeight + 'px';
    },

    heightEvents(event) {
      event.preventDefault();
      const itemHeight = document.querySelector('.events__item').clientHeight;
      const eventsList = document.querySelector('.events__list');

      if (eventsList.style.maxHeight== itemHeight + 'px') {
        eventsList.style.maxHeight = eventsList.scrollHeight + "px";
      } else {
        eventsList.style.maxHeight = itemHeight + 'px';
      }
      console.log(eventsList.style.maxHeight);
    }
  },

  mounted() {
    this.heightEventsDefault();
  },

  created() {
    window.addEventListener('resize', this.heightEventsDefault);
  }

}

new Vue(events);
