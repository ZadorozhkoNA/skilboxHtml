const arrayData = {

    ita:  [
      {
          age: "С 1400 по 1499 гг.",
          masters: [
              { name: 'Бенедетто ди Биндо', img: [], live: '', text: ''},
              { name: 'Бергоньоне Амброджо', img: [], live: '', text: ''},
              { name: 'Биссоло Франческо', img: [], live: '', text: ''},
              { name: 'Больтраффио Джованни', img: [], live: '', text: ''},
              { name: 'Бонсиньори Франческо', img: [], live: '', text: ''},
              { name: 'Боттичини Рафаэлло', img: [], live: '', text: ''},
              { name: 'Брамантино', img: [], live: '', text: ''},
              { name: 'Бреа Людовико', img: [], live: '', text: ''},
              { name: 'Бьяджо д’Антонио Туччи', img: [], live: '', text: ''},
              { name: 'Веккьетта', img: [], live: '', text: ''},
              { name: 'Андреа Верроккьо', img: [], live: '', text: ''},
              { name: 'Доменико Гирландайо',
                  img: ['Domeniko_Girlandaio.jpg', 'Domeniko_Girlandaio@2.jpg', 'Domeniko_Girlandaio@3.jpg'],
                  live: '2 июня 1448 — 11 января 1494.',
                  text: 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).'},
              { name: 'Беноццо Гоццоли', img: [], live: '', text: ''},
              { name: 'Граначчи Франческо', img: [], live: '', text: ''},
              { name: 'Грегорио ди Чекко', img: [], live: '', text: ''},
              { name: 'Джованни да Удине', img: [], live: '', text: ''},
              { name: 'Джованни ди Паоло', img: [], live: '', text: ''},
              { name: 'Джорджоне', img: [], live: '', text: ''},
              { name: 'Парентино Бернардо', img: [], live: '', text: ''},
              { name: 'Пезеллино', img: [], live: '', text: ''},
              { name: 'Пьетро Перуджино', img: [], live: '', text: ''},
              { name: 'Перуцци Бальдассаре', img: [], live: '', text: ''},
              { name: 'Пизанелло', img: [], live: '', text: ''},
              { name: 'Пинтуриккьо', img: [], live: '', text: ''},
          ]
      },
      {   age: "С 1500 по 1599 гг.",
          masters: []  },
      {   age: "С 1600 по 1699 гг.",
          masters: []  },
      {   age: "С 1700 по 1799 гг.",
          masters: [] },
      {   age: "С 1800 по 1899 гг.",
          masters: []  },
      {   age: "С 1900 по 1999 гг.",
          masters: []  },
      {   age: "С 2000 г.",
          masters: []  }
    ],


    fra: [
      {   age: "С 1400 по 1499 гг.",
          masters: []  },
      {   age: "С 1500 по 1599 гг.",
          masters: []  },
      {   age: "С 1600 по 1699 гг.",
          masters: []  },
      {   age: "С 1700 по 1799 гг.",
          masters: [] },
      {   age: "С 1800 по 1899 гг.",
          masters: []  },
      {   age: "С 1900 по 1999 гг.",
          masters: []  },
      {   age: "С 2000 г.",
          masters: []  }
      ],


    rus: [
      {   age: "С 1400 по 1499 гг.",
          masters: []  },
      {   age: "С 1500 по 1599 гг.",
          masters: []  },
      {   age: "С 1600 по 1699 гг.",
          masters: []  },
      {   age: "С 1700 по 1799 гг.",
          masters: [] },
      {   age: "С 1800 по 1899 гг.",
          masters: []  },
      {   age: "С 1900 по 1999 гг.",
          masters: []  },
      {   age: "С 2000 г.",
          masters: []  }
      ],

    deu:[
      {   age: "С 1400 по 1499 гг.",
          masters: []  },
      {   age: "С 1500 по 1599 гг.",
          masters: []  },
      {   age: "С 1600 по 1699 гг.",
          masters: []  },
      {   age: "С 1700 по 1799 гг.",
          masters: [] },
      {   age: "С 1800 по 1899 гг.",
          masters: []  },
      {   age: "С 1900 по 1999 гг.",
          masters: []  },
      {   age: "С 2000 г.",
          masters: []  }
      ],

    bel: [
      {   age: "С 1400 по 1499 гг.",
          masters: []  },
      {   age: "С 1500 по 1599 гг.",
          masters: []  },
      {   age: "С 1600 по 1699 гг.",
          masters: []  },
      {   age: "С 1700 по 1799 гг.",
          masters: [] },
      {   age: "С 1800 по 1899 гг.",
          masters: []  },
      {   age: "С 1900 по 1999 гг.",
          masters: []  },
      {   age: "С 2000 г.",
          masters: []  }
      ],
    }


const catalog = {
  el: '#catalog',
  data() {
      return {
        urlImg:'img/catalog/picture/',
        arrTab: ['fra', 'deu', 'ita', 'rus', 'bel'],
        statusTab: {fra: false, deu: false, ita: true, rus: false, bel: false},
        land: 'ita',
        arrInfo: {  name: 'Доменико Гирландайо',
                    img: ['Domeniko_Girlandaio.jpg', 'Domeniko_Girlandaio@2.jpg', 'Domeniko_Girlandaio@3.jpg'],
                    live: '2 июня 1448 — 11 января 1494.',
                    text: 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).'
                  },
        data: arrayData,

      }
  },
  methods : {
    choiceLand(land) {
      this.arrTab.forEach(item => {
        this.statusTab[item] = false;
      });
      this.statusTab[land] = true;
      this.land = land;
    },

    heightChangeAcc(event) {
      let panel = event.target.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
      if(event.target.classList.contains('accordion_active')) {
        event.target.classList.remove('accordion_active')
      } else {
        event.target.classList.add('accordion_active')
      }
    },
  }
}

new Vue(catalog);

