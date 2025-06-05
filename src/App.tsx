import { BsChevronDoubleDown } from "react-icons/bs";

function App()
{
  return(
    <>
      <nav className="flex items-center justify-between p-5 bg-black fixed left-0 right-0 top-0 pl-10 pr-10">
        <img src="/logo.svg" alt="Logo" className="invert w-10"></img>
        <div className="flex gap-5">
          <a href="#about" className=""> About Me </a>
          <a href="#about" className=""> My Projects </a>
          <a href="#about" className=""> Contact Me </a>
        </div>
      </nav>
      {/* Full-Page Hero */}
      <article className="h-screen flex flex-col justify-center items-center pl-10 pr-10">
        <h1 className="text-5xl"> Hi, I'm <span className="text-indigo-500">Ishayu. </span></h1>
        <br className="p-1"/>
        <p className="text-center"> I'm a High School Student and Hobbyist who enjoys learning new things. </p>
        <br className="p-1"/>
        <span className="flex items-center gap-2">
          <BsChevronDoubleDown/> 
          <p className="text-center"> Scroll to learn more </p>
          <BsChevronDoubleDown/>
        </span>
      </article>
      <hr className="ml-10 mr-10 text-gray-400 p-5"/>
      <article id="about" className="h-[80vh]">
        <h1 className="text-center text-3xl font-serif font-thin text-indigo-500"> Who Am I? </h1>
        <h2 className="text-center text-xl"> I'm Glad You Asked </h2>
        <br className="p-2"/>
        <p className="text-gray-400 text-center "> MY SKILLS </p>
      </article>
      <p className="text-xs text-center p-2"> Built using React JS and TailwindCSS. © Ishayu Ray 2025</p>
    </>
  )
}
export default App;