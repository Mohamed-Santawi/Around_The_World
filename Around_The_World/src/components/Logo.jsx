import logo from "../assets/logo.png";
export function Logo() {
  return (
    <a className="font flex items-center gap-3 text-2xl font-semibold">
      <img src={logo} alt="Logo Image" />
      Around the world
    </a>
  );
}
