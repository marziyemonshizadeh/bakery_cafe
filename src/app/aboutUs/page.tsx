import HomePageLayout from "@/components/layouts/homePageLayout";
import WeblogHeader from "@/components/templates/weblog/header";

async function AboutUs() {
  return (
    <HomePageLayout>
      <WeblogHeader title="درباره ما" />
      <section className="flex lg:flex-row flex-col md:justify-center items-center gap-24 bg-[#F9F9F9] md:p-20 p-8">
        <div>
          <span>درباره ما</span>
          <p className="font-bold text-2xl">فنجان داغ خوارزمی قهوه ست</p>
        </div>
        <div className="flex md:flex-row flex-col md:items-center md:gap-20 leading-8">
          <p className="md:w-72 text-slate-500">
            تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
            ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه راسا
            به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه
            است.
          </p>
          <p className="md:w-72 text-slate-500 leading-8">
            مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
            2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association
            of Europe) در آمده است.
          </p>
        </div>
      </section>
      <main className="flex lg:flex-row flex-col justify-center items-center gap-24 md:p-20 p-8 mx-5 overflow-hidden">
        <div className="w-[500px] leading-8">
          <span>Set Coffee</span>
          <p className="font-bold text-2xl">داستان قهوه ست</p>
          <p>
            تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
            ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه راسا
            به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه
            است.
          </p>
          <p>
            مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
            2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association
            of Europe) در آمده است و بسیاری از دوره‌های مربوط به فرآوری قهوه را
            مدیریت این مجموعه به صورت تخصصی در کارگاه‌های آموزشی این انجمن و
            همچنین کارگاه‌های تخصصی فرآوری قهوه به خصوص در زمینه بو دادن
            قهوه(Roasting) را در کشور آمریکا که از پیشگامان این صنعت است را
            گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و تکنولوژی روز دنیا
            وارد مرحله تولید قهوه به صورت صنعتی و گسترده شده‌ایم و مفتخریم اعلام
            کنیم که «قهوه ست» از این پس یک نام تجاری صنعتی در صنعت قهوه ایران
            است
          </p>
        </div>
        <div className="w-[500px] leading-8">
          <p>
            مسیری را که بنیان‌گذاران «قهوه ست» در دهه 20 شمسی آغاز کرده‌اند
            اکنون وارد مرحله جدیدی شده است و مفتخریم اعلام کنیم در بهمن ماه 94
            موفق به اخذ مجوزهای مربوطه از وزارت بهداشت درمان و آموزش پزشکی و
            سازمان غذا دارو شده‌ایم و تولید سنتی و محدود قهوه را تبدیل به تولید
            صنعتی و انبوه کرده‌ایم.
          </p>
          <p>
            از دیگر افتخارات مجموعه «قهوه ست» اخذ مدرک دیپلم دانش قهوه از انجمن
            قهوه تخصصی اروپا در فروردین ماه سال 95 است. (SCAE Coffee Diploma)
          </p>
          <p>
            امید داریم با کسب دانش روز دنیا در این صنعت ارتقا کیفیت و تنوع محصول
            در حد استانداردهای جهانی را در آینده‌ای نزدیک شاهد باشیم.
          </p>
          <p>صاحب امتیاز: شرکت فنجان داغ خوارزمی</p>
        </div>
      </main>
    </HomePageLayout>
  );
}

export default AboutUs;
