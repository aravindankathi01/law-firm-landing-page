import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className='h-full w-full'>
      <div className='-bg--color-black h-[900px] w-full -text--color-white flex justify-center'>
        <div className='flex flex-col items-center justify-center w-[1135px] h-[636px] pt-[56px]'>
          <Header />
          <HeroSection />
        </div>
      </div>
      <Body />
    </div>
  );
}

export default App;
