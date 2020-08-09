import { Meteor } from "meteor/meteor";
import { Shops } from "/lib/collections";
import Reaction from "/imports/plugins/core/core/server/Reaction";

Meteor.publish("PrimaryShop", () => Shops.find({
  shopType: "primary"
}, {
  limit: 1
}));

Meteor.publish("UserShop", function () {
  const user = Reaction.getUser();
  if (!user) {
    return this.ready();
  }
  const { profile } = user;
  const shopId = profile &&
    profile.preferences &&
    profile.preferences.reaction &&
    profile.preferences.reaction.activeShopId;
  
  return Shops.find({ _id: shopId });
});
