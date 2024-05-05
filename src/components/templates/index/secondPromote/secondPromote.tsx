import Style from "./secondPromote.module.css";

export default function SecondPromote() {
  return (
    <div
      className={`${Style.parallax} ${Style.parallaxImg} flex justify-center items-center text-orange-50 text-6xl font-extrabold my-12`}
    >
      بهترین لحظات زندگی با طعم قهوه
    </div>
  );
}
