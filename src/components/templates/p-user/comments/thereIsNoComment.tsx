import Image from "next/image";

function ThereIsNoComment() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10 md:mx-5 mx-2">
      <Image
        className="w-52 h-52 mb-8"
        alt="wishListImage"
        src="https://cdn3d.iconscout.com/3d/premium/thumb/no-data-7469046-6136223.png"
        width={200}
        height={200}
      />
      <h2 className="font-bold">هیچ کامنتی تابحال در سایت ثبت نکرده اید</h2>
    </div>
  );
}

export default ThereIsNoComment;
