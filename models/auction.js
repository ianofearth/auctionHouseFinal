Auction.Auction = DS.Model.extend({
  title: DS.attr(),
  identifier: DS.attr(),

  items: DS.hasMany('item', {async: true})
});
