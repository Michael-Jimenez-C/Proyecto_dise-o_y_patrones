export default function Navbar() {
  let menu = [
    ["Home", "/"],
    ["Products", "/products"],
    ["Pricing", "/pricing"],
    ["About", "/about"],
    ["Sign in", "login"],
  ];
  return (
    <nav className="relative md:mx-10 mx-auto mt-8 flex justify-center">
      <ol>
        {menu.map((item) => (
          <li className="inline-flex " key={"menu-" + item[0]}>
            <a
              href={item[1]}
              className="py-2.5 md:px-5 px-4 text-black hover:bg-green-500 select-none hover:cursor-pointer hover:text-green-50 hover:text"
            >
              {item[0]}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
