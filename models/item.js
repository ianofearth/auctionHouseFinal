Auction.Item = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  bidNumber: DS.attr(),
  startPrice: DS.attr(),
  backstory: DS.attr(),
  image: DS.attr(),
  yearAquired: DS.attr(),

  auction: DS.belongsTo('auction', {async: true})
});
