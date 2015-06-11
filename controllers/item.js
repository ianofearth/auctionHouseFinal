Auction.ItemController = Ember.ObjectController.extend({
  needs: ['auction'],
  isEditing: false,
  actions: {
    back: function(){
      var auction = this.get('controllers.auction.model');
      this.transitionToRoute('auction', auction.id);
    },
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var item = this.get('model');
      var auction = this.get('controllers.auction.model');
      item.save();
    },
    deleteItem: function() {
      if (confirm('Are you sure you want to remove this item from the auction?')) {
        var item = this.get('model');
        var auction = this.get('controllers.auction.model');
        auction.get('items').removeObject(item);
        auction.save();
        item.destroyRecord();

        this.transitionToRoute('auction', auction.id); //auction.id needed?

      }
    }
  }
});
