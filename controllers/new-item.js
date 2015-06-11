Auction.NewItemController = Ember.Controller.extend({
  needs: ['auction'],
  actions: {
    save: function() {
      var item = this.store.createRecord('item', {
        name: this.get('name'),
        description: this.get('description'),
        owner: this.get('owner'),
        bidNumber: this.get('bidNumber'),
        startPrice: this.get('startPrice'),
        backstory: this.get('backstory'),
        image: this.get('image'),
        yearAquired: this.get('yearAquired')
      });
      item.save();

      var auction = this.get('controllers.auction.model');
      auction.get('items').pushObject(item);
      auction.save();

      this.transitionToRoute('auction', auction.id);
    }
  }
});
