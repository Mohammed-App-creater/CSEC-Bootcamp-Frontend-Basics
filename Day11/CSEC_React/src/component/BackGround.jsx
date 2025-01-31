import GlowingText from "./GlowingText";
import Cards from "./card";
const BackGround = () => {
  return (
    <section className=" w-screen h-screen bg-[#080223]  text-white flex flex-col  items-center  pt-26 ">
      <div className=" w-full max-w-[1200px] flex flex-col  items-center gap-20 pt-18">
      <GlowingText />
      <h1 className=" text-3xl font-extrabold text-gray-300 pb-2 border-b">Course Contact</h1>
      <div className=" w-full flex justify-evenly gap-2">
        <Cards
          header="React.js"
          text="React is a JavaScript library for building user interfaces. It is 
        maintained by Facebook and a community of individual developers and
        companies. React can be used as a base in the development of single-page
        or mobile applications."
        />
        <Cards
          header="Tailwind.css"
          text="Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs quickly, without the need to write custom CSS."
        />
        <Cards
          header="Vite"
          text="Vite is a fast build tool and development server that focuses on providing an optimized and modern development experience, with features like hot module replacement and fast bundling."
        />
      </div>
      </div>
    </section>
  );
};

export default BackGround;
