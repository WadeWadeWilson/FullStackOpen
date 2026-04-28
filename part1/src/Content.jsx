import Part1 from "./partComponents/Part1"
import Part2 from "./partComponents/Part2"
import Part3 from "./partComponents/Part3"

const Content = (props) => {
    console.log(props)
    return (
        <>
            <Part1 part1 = {props.parts[0]}/>
            <Part2 part2 = {props.parts[1]}/>
            <Part3 part3 = {props.parts[2]}/>
        </>
    )
}

export default Content