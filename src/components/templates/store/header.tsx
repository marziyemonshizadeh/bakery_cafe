type HeaderProps = { imgUrl: string };

function Header({ imgUrl }: HeaderProps) {
  return (
    <header
      className="relative bg-no-repeat w-screen h-96 gap-3"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url("/${imgUrl}")`,
        height: "350px",
        objectFit: "cover",
      }}
    ></header>
  );
}

export default Header;
