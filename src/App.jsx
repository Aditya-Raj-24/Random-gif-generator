import Random from "./components/Random"
import Tags from "./components/Tag"

export default function App() {
  return (
    <div className=" w-full h-full flex flex-col relative background overflow-hidden items-center">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px] 
     px-10 py-2  text-4xl font-bold mx-auto"> RANDOM GIFS</h1>

      <div className=" flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        <Random />
        <Tags />
      </div>

    </div>
  );
}
