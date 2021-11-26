const selects = {
  el: '#selects',
  data() {
    return {
      arrId: ['realism', 'impressionism', 'postImpressionism', 'avangard', 'futurism'],
      selectVisible: {
        realism: false,
        impressionism: false,
        postImpressionism: false,
        avangard: false,
        futurism: false
      },
      selected: {
          realism: {text: 'Реализм', value: ''},
          impressionism: {text: 'Импрессионизм', value: ''},
          postImpressionism: {text: 'Постимпрессионизм', value: ''},
          avangard: {text: 'Авангард', value: ''},
          futurism: {text: 'Футуризм', value: ''},
        },
      options: {
        realism:[
          { text: 'Реализм-1', value: '1' },
          { text: 'Реализм-2', value: '2' },
          { text: 'Реализм-3', value: '3' }
        ],
        impressionism: [
          { text: 'Импрессионизм-1', value: '1' },
          { text: 'Импрессионизм-2', value: '2' },
          { text: 'Импрессионизм-3', value: '3' }
        ],
        postImpressionism: [
          { text: 'Постимпрессионизм-1', value: '1' },
          { text: 'Постимпрессионизм-2', value: '2' },
          { text: 'Постимпрессионизм-3', value: '3' }
        ],
        futurism: [
          { text: 'Футуризм-1', value: '1' },
          { text: 'Футуризм-2', value: '2' },
          { text: 'Футуризм-3', value: '3' }
        ],
        avangard: [
          { text: 'Авангард-1', value: '1' },
          { text: 'Авангард-2', value: '2' },
          { text: 'Авангард-3', value: '3' }
        ],

      },
    }
  },
  methods: {
    choice(id, text, value) {
      this.selected[id].text = text;
      this.selected[id].value = value;
      this.selectVisible[id] = false;
    },
    heightChange(event, id) {
      this.selectVisible[id] = !this.selectVisible[id];
      let panel = event.target.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;

        panel.querySelectorAll('.select__item').forEach(item => {
          item.setAttribute('tabindex', -1);
        });
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";

        panel.querySelectorAll('.select__item').forEach(item => {
          item.setAttribute('tabindex', 0);
        });
      }
    },
    heightCloset(event) {
      let panel = event.target.closest('.select__list');
      panel.style.maxHeight = null;
      panel.querySelectorAll('.select__item').forEach(item => {
        item.setAttribute('tabindex', -1);
      });
    }
  }
}

new Vue(selects);

