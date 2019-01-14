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
      this.set('isShowingThankYouModal', true);
    },

    close() {
      this.set('isShowingPurchaseModal', false);
      this.set('isShowingThankYouModal', false);
      this.get('blurBackground')(false);
    }

  }

});
