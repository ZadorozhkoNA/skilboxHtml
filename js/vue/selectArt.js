const selectArt = {
  el: '#select-art',
  data() {
    return {
      selectVisible: {
        art: false,
      },
      selected: {
          art: {text: 'Живопись', value: ''},
        },
        options: {
          art: [
          { text: 'Живопись-1', value: '1' },
          { text: 'Живопись-2', value: '2' },
          { text: 'Живопись-3', value: '3' }
          ]
        },
    }
  },
  methods: {
    choice(text, value) {
      this.selected.art.text = text;
      this.selected.art.value = value;
      this.selectVisible.art = false;
    },
    heightChange(event) {
      this.selectVisible.art = !this.selectVisible.art;
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

new Vue(selectArt);
