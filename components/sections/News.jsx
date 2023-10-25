import Button from "../ui/button"
import NewsCard from "../cards/NewsCard"

export default function News() {
  return(
    <div>
      <section className="text-blue0 flex justify-center mt-8">
        <div>
        <div className="flex">
          <div className="xl:ml-auto ml-12">
            <h2 className="text-2r font-bold">News from TUM</h2>
            <p className="text-xl w-80p my-4">News, research results and events: everything that enthuses people at our university.</p>
            <Button style="bg-blue3 text-white" text="SEE ME"/>
          </div>
          <div className="xl:flex hidden gap-8 mt-3">
          <NewsCard 
            img="https://www.tum.de/fileadmin/_processed_/c/4/csm_20220803-01_035_d50bd503ce.webp"
            littleTitle="WirtschaftsWoche rankings"
            title="Germany's strongest university in business sciences"
            intro="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            date="12/16/2022"
            read="Reading time 2min."
          />
          <NewsCard 
            img="https://www.tum.de/fileadmin/_processed_/3/b/csm_20221117_Laura_Fabbietti_AE_-352_d2a7b51af3.webp"
            littleTitle="WirtschaftsWoche rankings"
            title="Germany's strongest university in business sciences"
            intro="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            date="12/16/2022"
            read="Reading time 2min."
          />
          </div>
        </div>
        <div className="flex justify-center mt-16 xl:pl-64">
          <div>
            <div className="xl:hidden flex md:flex-row flex-col gap-8 mt-3">
              <NewsCard 
                img="https://www.tum.de/fileadmin/_processed_/c/4/csm_20220803-01_035_d50bd503ce.webp"
                littleTitle="WirtschaftsWoche rankings"
                title="Germany's strongest university in business sciences"
                intro="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
                date="12/16/2022"
                read="Reading time 2min."
              />
              <NewsCard 
                img="https://www.tum.de/fileadmin/_processed_/3/b/csm_20221117_Laura_Fabbietti_AE_-352_d2a7b51af3.webp"
                littleTitle="WirtschaftsWoche rankings"
                title="Germany's strongest university in business sciences"
                intro="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
                date="12/16/2022"
                read="Reading time 2min."
              />
            </div>
            <div className="flex md:flex-row flex-col gap-8 mt-3">
              <NewsCard 
                img="https://www.tum.de/fileadmin/user_upload_87/_processed_/0/8/csm_20200730_Fabian_Theis_AE_-66_7dc543a1ea.webp"
                littleTitle="WirtschaftsWoche rankings"
                title="Germany's strongest university in business sciences"
                intro="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
                date="12/16/2022"
                read="Reading time 2min."
              />
              <NewsCard 
                img="https://www.tum.de/fileadmin/_processed_/7/c/csm_Foto_Nobel_d39c0165fa.webp"
                littleTitle="WirtschaftsWoche rankings"
                title="Germany's strongest university in business sciences"
                intro="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
                date="12/16/2022"
                read="Reading time 2min."
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}