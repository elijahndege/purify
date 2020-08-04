import { SET_MESSAGE } from '@/store/mutations';

export default {
  install(Vue, options) {
    Vue.prototype.$showSuccessMessage = function(text) {
      this.$store.commit(SET_MESSAGE, {
        text,
        title: 'Success',
        type: 'success',
      });
    };

    Vue.prototype.$showErrorMessage = function(text, title = 'Error') {
      this.$store.commit(SET_MESSAGE, { text, title, type: 'error' });
    };
  },
};
