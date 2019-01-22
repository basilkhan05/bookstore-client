import Component from '@ember/component';

export default Component.extend({

  actions: {

    openPurchaseConfirmation() {
      this.get('book').reload().then(() => {
        this.set('isShowingPurchaseModal', true);
        this.get('blurBackground')(true);
      });
    },

    openThankYouMessage() {
      this.setProperties({
        isShowingPurchaseModal: false,
        isShowingThankYouModal: true
      });
    },

    close() {
      this.setProperties({
        isShowingPurchaseModal: false,
        isShowingThankYouModal: false
      });
      this.get('blurBackground')(false);
    }

  }

});
