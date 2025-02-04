const NavBar = () => {
  return (
    <section className=" w-full  h-20 bg-white flex justify-evenly  items-center p-4 shadow-md border-b border[p"> 
      <div className="navbar__logo">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <div className="navbar__links">
        <a href="#">Job Search</a>
        <a href="#">My Applications</a>
        <a href="#">Companies</a>
        <a href="#">Sign Contact Us</a>
        <a href="#" className="navbar__cta">
          Contact Us
        </a>
      </div>
      <div className="authentications">
        <button className="authentications__login">Login</button>
        <button className="authentications__register">Register</button>
      </div>
      <div className="navbar__menu">
        <img src="/assets/menu.svg" alt="menu" />
      </div>
    </section>
  );
};

export default NavBar;
