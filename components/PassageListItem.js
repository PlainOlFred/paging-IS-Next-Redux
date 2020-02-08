import Link from 'next/link'

const PassageListItem = props => {

  const {id, ref_id, title, label} = props
  return (
    <>
      <Link href="/passage/[id]" as={`/passage/${id}`}>
          <a onClick={()=>props.setPassage(id)}><h3>{ref_id}. {title}</h3></a> 
      </Link>
      <blockquote>{label}</blockquote>
    </>
  )
}
  export default PassageListItem;
