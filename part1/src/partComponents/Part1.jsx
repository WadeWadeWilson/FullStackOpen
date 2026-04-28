const Part1 = (props) => {
    console.log(props)
    return (
        <>
            <p>{props.part1.name} {props.part1.exercises}</p>
        </>
    )
}

export default Part1