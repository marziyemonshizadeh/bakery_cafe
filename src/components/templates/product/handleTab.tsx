"use client";

import { tabs } from "@/utils/constants";
import { useState } from "react";
import Descriptions from "./Description";
import MoreInfoes from "./MoreInfoes";
import Comments from "./comments";
import Tab from "./tab";

type HandleTabProps = { product: any; productID: any };

function HandleTab({ product, productID }: HandleTabProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs.DESCRIPTION);

  const showDescriptionTab = () => setActiveTab(tabs.DESCRIPTION);
  const showMoreInfoesTab = () => setActiveTab(tabs.MOREINFOES);
  const showCommentsTab = () => setActiveTab(tabs.COMMENTS);
  return (
    <>
      <Tab
        activeTab={activeTab}
        showDescriptionTab={showDescriptionTab}
        showMoreInfoesTab={showMoreInfoesTab}
        showCommentsTab={showCommentsTab}
      />
      {activeTab === tabs.DESCRIPTION && (
        <Descriptions longDescription={product.longDescription} />
      )}
      {activeTab === tabs.MOREINFOES && (
        <MoreInfoes smell={product.smell} weight={product.weight} />
      )}
      {activeTab === tabs.COMMENTS && (
        <Comments
          comments={JSON.parse(JSON.stringify(product.comments))}
          productID={productID}
        />
      )}
    </>
  );
}

export default HandleTab;
