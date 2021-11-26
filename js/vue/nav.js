const nav = {
  el: '#nav',
  data() {
      return {
        navList: [
          {text: 'О нас', blockID: 'abaut-h2'},
          {text: 'Галерея', blockID: 'hall-h2'},
          {text: 'Каталог', blockID: 'catalog-h2'},
          {text: 'События', blockID: 'events-h2'},
          {text: 'Издания', blockID: 'publications-h2'},
          {text: 'Проекты', blockID: 'projects-h2'},
          {text: 'Контакты', blockID: 'contacts-h2'},
          ],
      }
  },

  methods: {
    scrolling(event, blockID) {
      event.preventDefault()
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }
}

new Vue(nav);
