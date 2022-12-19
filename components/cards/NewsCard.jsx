export default function NewsCard(props) {
    return(
      <a href="#">
      <div className="w-20.75r group">
        <div className="relative">
          <img src={props.img} alt="" />
          <p className="group-hover:text-blue-500 absolute bottom-0 bg-[#e8ecef] py-[0.124rem] px-[0.5rem] text-xs font-semibold">TUM in rankings</p>
        </div>
        <div className="group-hover:text-blue-500">
          <p className="font-bold text-base mt-2">{props.littleTitle}</p>
          <h2 className="font-bold text-xl my-2">{props.title}</h2>
          <p className="leading-[1.2rem] text-base font-semibold">{props.intro}</p>
          <div className="flex justify-between mt-6 text-sm font-semibold">
            <p>{props.date}</p>
            <p>{props.read}</p>
          </div>
        </div>
      </div>
      </a>   
    )
}