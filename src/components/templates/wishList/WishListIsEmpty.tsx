import Image from "next/image";

type Props = {};

function WishListIsEmpty({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10 md:mx-5 mx-2">
      <Image
        className="w-36 h-36 mb-8"
        alt="wishListImage"
        src="https://cdn-icons-png.flaticon.com/512/4090/4090539.png"
        width={200}
        height={200}
      />

      <h2 className="font-bold">لیست علاقه مندی های شما خالی می باشد</h2>
      <p>
        برای اضافه کردن محصول مورد نظر به لیست علاقه مندی ها لطفا روی آیکون قلب
        بزنید
      </p>
    </div>
  );
}

export default WishListIsEmpty;
