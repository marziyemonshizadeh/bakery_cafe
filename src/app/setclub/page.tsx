import HomePageLayout from "@/components/layouts/homePageLayout";
import HowDoIFindOutAboutMyPoints from "@/components/templates/SetClub/HowDoIFindOutAboutMyPoints";
import HowDoIUseMyPoints from "@/components/templates/SetClub/HowDoIUseMyPoints";
import HowToEarnPoints from "@/components/templates/SetClub/HowToEarnPoints";
import ClubMember from "@/components/templates/SetClub/clubMember";
import WeblogHeader from "@/components/templates/weblog/header";

const SetClub = async () => {
  return (
    <HomePageLayout>
      <WeblogHeader title="راهنمای باشگاه مشتریان آنلاین" />
      <h2 className="text-2xl font-extrabold text-center m-10">
        راهنمای کامل و جامع باشگاه مشتریان فروشگاه آنلاین
      </h2>
      <div className="md:mx-40 m-8 leading-10">
        <ClubMember />
        <HowToEarnPoints />
        <HowDoIFindOutAboutMyPoints />
        <HowDoIUseMyPoints />
        <div className="flex justify-center gap-6 my-6">
          <button className="text-[#eacfaa] dark:text-[#413a2d] w-[500px] bg-[#413a2d] dark:bg-[#eacfaa]  hover:bg-[#4d4435] focus:ring-1 focus:outline-none focus:ring-[#eacfaa] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:hover:bg-[#f6dcb8] dark:focus:ring-blue-800">
            ورود یا عضویت
          </button>
          <button className="text-[#eacfaa] dark:text-[#413a2d] w-[500px] bg-[#413a2d] dark:bg-[#eacfaa]  hover:bg-[#4d4435] focus:ring-1 focus:outline-none focus:ring-[#eacfaa] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:hover:bg-[#f6dcb8] dark:focus:ring-blue-800">
            مشاهده صفحه امتیاز های من
          </button>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default SetClub;
