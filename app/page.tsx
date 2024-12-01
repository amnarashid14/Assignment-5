

export default function Home() {
  return (
    <>
    <div className="gridContainer">
<div className="text-center rounded-lg row-start-1 row-end-4 bg-[#00ffff]">AG1</div>
<div className="text-center rounded-lg col-start-2 col-end-5 bg-[#faebd7] flex flex-col justify-between">AG2
  <div className="flex justify-between h-1/2 ">
  <div className=" bg-[#d87093] w-5/12 rounded-lg">AG4</div>
  <div className=" bg-[#d87093] w-5/12 rounded-lg">AG5</div></div>
</div>
<div className="text-center rounded-lg row-start-1 row-end-4 col-start-5 col-end-5 bg-[#00ffff]">AG3</div>
<div className="text-center rounded-lg row-start-2 row-end-4 bg-[#e49604]">AG6</div>
<div className="text-center rounded-lg col-start-3 col-end-5 bg-[#ffd500] flex flex-col justify-between">AG7
  <div className="flex justify-between h-1/2">
  <div className="bg-[#d87093] w-5/12 rounded-lg">AG8</div>
  <div className="bg-[#d87093] w-5/12 rounded-lg">AG9</div></div>
</div>
<div className="text-center rounded-lg col-start-3 col-end-5 bg-[#dda0dd]">AG10</div>

    </div>
    </>
  );
}
