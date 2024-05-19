import { tabs } from "@/utils/constants";

type TabProps = {
  activeTab: any;
  showDescriptionTab: any;
  showMoreInfoesTab: any;
  showCommentsTab: any;
};

function Tab({
  activeTab,
  showDescriptionTab,
  showMoreInfoesTab,
  showCommentsTab,
}: TabProps) {
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700 my-8">
      <ul
        className="flex flex-wrap justify-center gap-3 -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeTab === tabs.DESCRIPTION &&
              "border-[#2e2b27] hover:text-black hover:border-black"
            }`}
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={showDescriptionTab}
          >
            توضیحات
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeTab === tabs.MOREINFOES &&
              "border-[#2e2b27] hover:text-black hover:border-black"
            }`}
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
            onClick={showMoreInfoesTab}
          >
            اطلاعات بیشتر
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
              activeTab === tabs.COMMENTS &&
              "border-[#2e2b27] hover:text-black hover:border-black"
            }`}
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
            onClick={showCommentsTab}
          >
            نظرات
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Tab;
