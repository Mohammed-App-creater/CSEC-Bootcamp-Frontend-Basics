

export const NavBar = () => {
  return (
    <section className=" w-screen bg-transparent text-white flex "  >
        <nav className=" w-full flex justify-between items-center p-4">
            <h1>React.js</h1>
            <ul className="flex justify-between items-center w-1/2 px-18">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </section>
)
}

export default NavBar;