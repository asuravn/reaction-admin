import React from "react";
import { withApollo } from "react-apollo";
import Shopping from "mdi-material-ui/Shopping";
import { registerOperatorRoute } from "/imports/client/ui";
import { Marketplace } from "../components";

registerOperatorRoute({
  group: "navigation",
  isSetting: false,
  MainComponent: Marketplace,
  hocs: [
    withApollo
  ],
  permissions: ["reaction:legacy:shops/marketplace"],
  path: "/marketplace",
  // eslint-disable-next-line react/display-name
  SidebarIconComponent: (props) => <Shopping {...props} />,
  sidebarI18nLabel: "marketplaceSettings.sidebarLabel"
});
