import logo from "../assets/logo.png";
export function Logo() {
  return (
    <a className="flex items-center gap-3 font-semibold font text-2xl">
      <img src={logo} alt="Logo Image" />
      Around the world
    </a>
  );
}
