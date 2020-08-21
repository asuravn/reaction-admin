import { Meteor } from "meteor/meteor";
import { Shops } from "/lib/collections";
import Reaction from "/imports/plugins/core/core/server/Reaction";

Meteor.publish("PrimaryShop", () => Shops.find({
  shopType: "primary"
}, {
  limit: 1
}));

Meteor.publish("UserShop", function userShop() {
  // if (Meteor.userId()) {
  //   return this.ready();
  // }
  // const { profile } = Meteor.users.findOne(Meteor.userId(), { fields: { profile: 1 } });
  // const shopId = profile &&
  //   profile.preferences &&
  //   profile.preferences.reaction &&
  //   profile.preferences.reaction.activeShopId;
  //
  // if (!shopId) {
  //   return this.ready();
  // }
  return Shops.find({});
});
