Auction.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newAuction = this.store.createRecord('auction', {
        title: this.get('title'),
        identifier: this.get('identifier')
      });
      newAuction.save();
      this.transitionToRoute('auctions');
    }
  }
});
