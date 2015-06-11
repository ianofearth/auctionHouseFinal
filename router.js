Auction.Router.map(function(){
  this.resource('auctions');
  this.resource('auction', {path: '/auction/:auction_id'}, function() {
    this.resource('new-item');

  });
  this.resource('new-auction');
  this.resource('item', {path: '/item/:item_id'});

});
