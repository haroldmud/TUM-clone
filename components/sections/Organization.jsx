import OrganizationCard from "../cards/OrganizationCard"
import Button from "../ui/button"

export default function Organization() {
  return(
     <section className="flex justify-center mt-20">
       <div className="w-84p">
        <div className="relative lg:block hidden">
          <img className="lg:w-[60%] lg:h-30r xl:h-auto xl:w-auto object-cover" src="https://www.tum.de/fileadmin/_processed_/8/1/csm_csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d_4b7c164f6e.webp" alt="" />
          <div>
            <OrganizationCard 
              heading="What drives us: President Thomas F. Hofmann about TUM" 
              mainStyle="c absolute right-12 top-[4.3rem]  bg-blue3 text-white" 
              button={<Button style="bg-white text-blue3" text="READ MORE"/>}
              intro="Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, 
              relying on the intelligence of the entire university and working closely with global partners to do so."  
            />
          </div>
        </div>
        <div className="lg:hidden">
          <img src="https://www.tum.de/fileadmin/_processed_/8/1/csm_csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d_4b7c164f6e.webp" alt="" />
          <section className={`p-4 bg-blue3 text-white`}>
            <h2 className="text-2xl font-bold">What drives us: President Thomas F. Hofmann about TUM</h2>
            <p className="my-4">
              Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, 
              relying on the intelligence of the entire university and working closely with global partners to do so.
            </p>
            <div>
              <Button style="bg-white text-blue3" text="READ MORE"/>
            </div>
          </section>
        </div>

        <h2 className="text-blue0 font-bold text-2r mt-20 mb-12">TUM in numbers</h2>
        
        <div className="lg:flex hidden gap-4">
          <div class="bg-blue3 w-50p pl-8 text-white">
            <h2 className="text-8r font-bold">50,000</h2>
            <p className="text-3xl font-bold">Students</p>
          </div>
          <div className="w-[40%] flex flex-col gap-4 text-blue0">
            <div className="bg-yellow-500 flex justify-between">
              <h2 className="text-5r font-bold">176</h2>
              <p className="p-4 w-64 mt-4 text-xl font-bold">ERC Grants for cutting-edge research</p>
            </div>
            <div className="bg-[#b55ca5] flex justify-between">
              <h2 className="text-5r font-bold">18</h2>
              <p className="p-4 leading-0.9r mt-12 text-xl font-bold">Nobel laureates</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="lg:hidden flex  md:flex-row flex-col xl:gap-4 md:gap-8 gap-4">
          <div class="bg-blue3 text-white p-4">
            <h2 className="md:text-[3rem] text-5r md:text-left text-center font-bold">50,000</h2>
            <p className="text-3xl font-bold text-center">Students</p>
          </div>
          <div className="bg-yellow-500 p-4">
              <h2 className="md:text-[3rem] text-5r font-bold md:text-left text-center">176</h2>
              <p className="py-6 md:text-left md:w-40 text-center md:text-xl text-2xl font-bold">ERC Grants for cutting-edge research</p>
          </div>
          <div className="bg-[#b55ca5] p-4">
              <h2 className="md:text-[3rem] md:text-left text-5r text-center font-bold">18</h2>
              <p className="leading-0.9r md:text-left text-center text-2xl md:text-xl font-bold">Nobel laureates</p>
          </div>
        </div>
        </div>
       </div>
     </section>
  )
}