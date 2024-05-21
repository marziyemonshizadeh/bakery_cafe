import Image from "next/image";

function Descriptions({ longDescription }: any) {
  return (
    <>
      <h2 className="text-2xl font-extrabold my-2">
        دانه قهوه کلمبیا از منطقه Nariño
      </h2>
      <ul className="text-slate-600 dark:text-slate-300">
        <li>Region: Nariño</li>
        <li>Variety: CASTILLO , CATURRA</li>
        <li>Farm owner: Various Local farmers</li>
        <li>Altitude: 1780 masl</li>
        <li>Notes:Citrus fruit, Caramel, Vanilla</li>
      </ul>
      <h2 className="text-2xl font-extrabold my-2">بررسی محصول</h2>
      <Image
        className="mx-auto h-auto max-w-md m-4"
        alt="cafe_de_colombia"
        src="/images/product/cafe_de_colombia.jpg"
        width={200}
        height={200}
      />
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        {longDescription}
      </p>
    </>
  );
}

export default Descriptions;
