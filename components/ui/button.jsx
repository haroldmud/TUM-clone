export default function Button(props){
    return(
        <button className={`w-fit p-3 font-bold ${props.style}`}>
          {props.text}
        </button>
    )
}