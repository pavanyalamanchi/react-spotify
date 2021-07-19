import CardComp from './Card'

const SeeALL = (props) => {
    return(
        <>
        {props.data.map((ele) => (
              <CardComp
                key={ele.id}
                image={ele.album.cover_medium}
                title={ele.album.title}
                desc={ele.title_short}
              />
            ))}
        {/*console.log(props.data)*/}
        </>
    )
}

export default SeeALL