import DiscoverMob from "../mobile/discoverMob"

export default function Discover(){
    return(
      <section className="flex justify-center">
        <div className="text-blue0 w-84p mt-20">
          <div className="flex flex-col justify-start">
            <h3 className="font-bold">Customer navigation</h3>
            <h2 className="text-2r font-bold">Discover what TUM has to offer</h2>
          </div>
          <div className="xl:flex hidden">
              <div className="relative pl-64 mt-12">
                <div className="w-45r">
                  <img src="/assets/images/discover.png" alt="fils dep" />
                </div>
              
                <div className="w-20.75r absolute top-12 left-0 border p-2 bg-white">
                  <p className="p-3 ">For:</p>
                  <ul className="text">
                    <li className="p-3 bg-gray-100 font-bold text-blue0 ease-in transition-all duration-100">Prospective Students</li>
                    <li className="p-3 hover:bg-gray-100 font-bold text-blue3 hover:text-blue0 ease-in transition-all duration-100">Founders</li>
                    <li className="p-3 hover:bg-gray-100 font-bold text-blue3 hover:text-blue0 ease-in transition-all duration-100">Employees</li>
                  </ul>
                  <p className="p-3 hover:bg-gray-100 font-bold text-blue3 hover:text-blue0 ease-in transition-all duration-100 border-t">
                    Show all
                  </p>
                </div>
              </div>
            <div>
              <div className="xl:ml-auto pl-20 h-fit mt-40">
                <h2 className="text-2r font-bold">Prospective Student</h2>
                <p className="text-xl my-4">Learn to bring ideas to life, discover new possibilities, work in teams and build networks.</p>
                <button className="text-blue3 w-fit p-3 font-bold bg-white border border-blue3 hover:border-blue0 hover:text-blue0">
                  Learn more
                </button>
            </div>
            </div>
          </div>
          <DiscoverMob/>
          <div className="flex bg-gray-300 hover:bg-gray-100 p-3  justify-between border-b border-blue0 mb-12 mt-8">
            <p className="xl:text-2xl">Select degree program or enter keyword</p>
            <div className="w-6 items-center h-fit xl:mt-2">
              <img src="/assets/icons/down.png" alt="icon" />
            </div>
          </div>
          <div className="flex gap-4 justify-end -mt-8">
            <p className="xl:text-xl text-blue3 font-semibold underline">Degree programs</p>
            <div className="w-4 items-center h-fit xl:mt-2 mt-1.5">
              <img src="/assets/icons/right-arrow.png" alt="icon"/>
            </div>
          </div>
        </div>
      </section>
    )
}