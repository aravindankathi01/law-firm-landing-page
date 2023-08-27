import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className='h-full w-full'>
      <div className='-bg--color-black h-[900px] w-full -text--color-white'>
        <div className=' flex flex-col items-center ml-[153px] mr-[152px] pt-[53px]'>
          <Header />
          <HeroSection />
        </div>
      </div>
      <Body />
    </div>
  );
}

export default App;
