type Props = {
  title: string;
};

export default function TitleSection({ title }: Props) {
  return (
    <div data-aos="fade-down" className="relative">
      <div className="absolute left-1/2 -ml-0.5 w-[1.5px] h-28 bg-orange-900 mt-10"></div>
      <p className="pt-40 text-orange-900 flex justify-center items-center text-lg font-bold">
        {title}
      </p>
    </div>
  );
}
