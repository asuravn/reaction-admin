import { Meteor } from "meteor/meteor";
import { Shops, Accounts } from "/lib/collections";
import Reaction from "/imports/plugins/core/core/server/Reaction";
import {getUserId} from "../../Reaction/accountUtils";

Meteor.publish("PrimaryShop", () => Shops.find({
  shopType: "primary"
}, {
  limit: 1
}));

Meteor.publish("MyShop", function publishMyShop() {
  const user = Reaction.getUser();
  if (!user) {
    return this.ready();
  }
  console.log('Reaction.getShopId()', user);
  return Shops.find({})
});
