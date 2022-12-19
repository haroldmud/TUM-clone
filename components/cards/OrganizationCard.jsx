export default function OrganizationCard(props) {
  return(
    <section className={`w-50p p-8 ${props.mainStyle}`}>
      <h2 className="text-2xl font-bold">{props.heading}</h2>
      <p className="my-4">
        {props.intro}
      </p>
      <div>
        {props.button}
      </div>
    </section>
  )
}