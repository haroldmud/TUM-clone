export default function Hero(){
 return(
  <div>
    <div>
      <div className="relative">
        <div className="sm:hidden block h-20r bg-gradient-to-r from-blue2 to-blue3 ">

        </div>
        <img className="cropped-ofp object-cover xl:h-[43rem] w-full" src="https://images.adsttc.com/media/images/624d/bd1c/d629/c201/652a/b9d8/large_jpg/20220314-2018-mis-lus-180507-alpe-furx-zwischenwasser-320-ais-autorisiert.jpg?1649261899" alt="hero bg" />
        <div className="absolute text-white md:top-16 md:left-32 top-16 left-8 ">
          <p className="md:text-5xl text-4xl font-bold leading-1 w-80p">TUM. The Entrepreneurial University</p>
          <p className="text-xl	md:mt-12 mt-6 md:w-auto w-70p">Innovation through talent, excellence and responsability</p>
        </div>
      </div>
    </div>
  </div>
 )   
}
