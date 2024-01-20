import "./App.css";

import capture from "./assets/Capture.png";

function App() {
  return (
    <div className="w-screen border md:h-screen h-full bg-slate-300 flex items-center justify-center flex-col md:flex-row">
      <div className="text-center ">
        <a
          href="https://dribbble.com/shots/23470479-Biihouse-Real-Estate-App"
          className="text-lg font-bold underline"
          target="_blank"
        >
          Original design
        </a>
        <img src={capture} alt="" />
      </div>
      <div className="text-center m-4">
        <span className="text-lg font-bold ">My recreation</span>
        <div className="h-[745px] w-[351px] p-1">
          <div className="h-full border-black border-2 rounded-3xl bg-[#FAFAFA] p-2 text-left overflow-hidden">
            {/* Search box */}
            <div className="border  bg-white rounded-lg mt-9 flex items-center justify-between">
              <div className="flex items-center p-2 box-border">
                <div className="bg-slate-100 h-4 w-4 rounded-full mr-3 "></div>
                <span className="text-[#A4A4A4]">Find anything...</span>
              </div>
              <div className="bg-slate-100 h-4 w-4 rounded-full mr-3 "></div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex ">
              <div className="border min-w-20 rounded-md bg-white px-2 box-border text-sm mr-2 py-1">
                <div className="bg-slate-100  h-6 w-6 mb-2 rounded-full mr-3 "></div>
                Hotel
              </div>
              <div className="border min-w-20 rounded-md bg-white py-1 px-2 box-border text-sm mr-2">
                <div className="bg-slate-100 h-6 w-6 mb-2 rounded-full mr-3 "></div>
                Apartment
              </div>
              <div className="border min-w-20 rounded-md bg-white py-1 px-2 box-border text-sm mr-2">
                <div className="bg-slate-100 h-6 w-6 mb-2 rounded-full mr-3 "></div>
                Villa
              </div>
              <div className="border min-w-20 rounded-md bg-white py-1 px-2 box-border text-sm">
                <div className="bg-slate-100 h-6 w-6 mb-2 rounded-full mr-3 "></div>
                Tiny Ho
              </div>
            </div>

            {/* Property Nearby */}
            <div className="">
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold">Property nearby</span>
                <span className="text-blue-600 text-sm">See More</span>
              </div>
              <div className="mt-3 flex absolute overflow-hidden">
                <div className="">
                  <div className="bg-slate-200 w-52 h-48 rounded-lg mr-3 text-end flex p-2 items-end">
                    <div className="flex items-center border bg-white p-1 rounded-md text-xs justify-center">
                      <div className="bg-slate-100 h-4 w-4 rounded-full mr-1 "></div>
                      <span className="flex">4 Bed</span>
                    </div>
                    <div className="flex items-center border bg-white p-1 rounded-md text-xs justify-center">
                      <div className="bg-slate-100 h-4 w-4 rounded-full mr-1 "></div>
                      2Bath
                    </div>
                    <div className="flex items-center border bg-white p-1 rounded-md text-xs justify-center">
                      <div className="bg-slate-100 h-4 w-4 rounded-full "></div>
                      1,200m²
                    </div>
                  </div>
                  <div className="border mt-3 flex flex-col">
                    <span className="text-sm font-bold">
                      Luxe 1 BRD Romantic hideaw...
                    </span>
                    <span className="text-xs mt-1 text-slate-500">
                      Ubud, Bali. Indonesia
                    </span>
                    <span className="text-xl mt-2 font-bold">$6.420</span>
                  </div>
                </div>
                <div className="">
                  <div className="bg-slate-200 w-52 h-48 rounded-lg mr-3 text-end flex p-2 items-end">
                    <div className="flex items-center border bg-white p-1 rounded-md text-xs justify-center">
                      <div className="bg-slate-100 h-4 w-4 rounded-full mr-1 "></div>
                      <span className="flex">4 Bed</span>
                    </div>
                    <div className="flex items-center border bg-white p-1 rounded-md text-xs justify-center">
                      <div className="bg-slate-100 h-4 w-4 rounded-full mr-1 "></div>
                      2Bath
                    </div>
                    <div className="flex items-center border bg-white p-1 rounded-md text-xs justify-center">
                      <div className="bg-slate-100 h-4 w-4 rounded-full "></div>
                      1,200m²
                    </div>
                  </div>
                  <div className="border mt-3 flex flex-col">
                    <span className="text-sm font-bold">
                      Luxe 1 BRD Romantic hideaw...
                    </span>
                    <span className="text-xs mt-1 text-slate-500">
                      Ubud, Bali. Indonesia
                    </span>
                    <span className="text-xl mt-2 font-bold">$6.420</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
