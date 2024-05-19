type MoreInfoesProps = { smell: string; weight: number };

function MoreInfoes({ smell, weight }: MoreInfoesProps) {
  return (
    <div className="mb-14">
      <div className="flex justify-between border-b py-3">
        <span className="font-semibold">وزن</span>
        {weight} کیلوگرم
      </div>
      <div className="flex justify-between border-b py-3">
        <span className="font-semibold">طعم</span>
        {smell}
      </div>
      <div className="flex justify-between gap-4 py-3">
        <span className="font-semibold">انتخاب آسیاب</span>
        <p className="text-left">
          ائروپرس/ وی شصت (ریز تا متوسط) , اسپرسو ساز خانگی (ریز) , جذوه (بسیار
          ریز) , دانه , فرنچ پرس (درشت) , قهوه ساز خانگی (متوسط) , کلد برو (خیلی
          درشت) , کمکس (متوسط به درشت) , مکا پات (ریز)
        </p>
      </div>
    </div>
  );
}

export default MoreInfoes;
