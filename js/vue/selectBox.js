const selectBox = {
  el: '#select__box',
  data() {
      return {
        list: [
          {name: 'hit', value: 'hit', title: 'Бестселлеры'},
          {name: 'art', value: 'art', title: 'Искусство'},
          {name: 'architec', value: 'architec', title: 'Архитектура'},
          {name: 'styling', value: 'styling', title: 'Дизайн'},
          {name: 'fashion', value: 'fashion', title: 'Мода'},
          {name: 'kids', value: 'kids', title: 'Детям'},
          {name: 'liter', value: 'liter', title: 'Художественная литература'},
          {name: 'publicism', value: 'publicism', title: 'Публицистика'},
          {name: 'guidebook', value: 'guidebook', title: 'Путеводители'},
          {name: 'philosophy', value: 'philosophy', title: 'Философия'},
          {name: 'training', value: 'training', title: 'Учебная литература'},
          {name: 'newspapers', value: 'newspapers', title: 'Журналы и газеты'},
        ],
      }
  },
}

new Vue(selectBox);
