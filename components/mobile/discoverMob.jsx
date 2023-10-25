
export default function DiscoverMob(){
    return(
      <section className="xl:hidden">
        <div className="flex md:flex-row flex-col mt-12">
        <div className="border-2r w-fit border-yellow-500">
          <div className="w-15r top-12 left-0 border p-2 bg-white">
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
        <div className="xl:ml-auto md:pl-12 h-fit md:mt-20 mt-8">
                <h2 className="text-2r font-bold">Prospective Student</h2>
                <p className="text-xl my-4 md:w-80p ">Learn to bring ideas to life, discover new possibilities, work in teams and build networks.</p>
                <button className="text-blue3 w-fit p-3 font-bold bg-white border border-blue3 hover:border-blue0 hover:text-blue0">
                  Learn more
                </button>
            </div>
        </div>
      </section>
    )
}
