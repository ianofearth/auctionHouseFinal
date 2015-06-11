Auction.AuctionController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var auction = this.get('model');
      auction.save();
    },
    delete: function() {
      if (confirm('Are you sure you want to remove this auction?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('auctions');
      }
    }
  }
});
