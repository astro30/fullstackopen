const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content couples={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]} />
      <Total exercises={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

const Header = (props) => <h1>{props.course}</h1>;
const Content = (props) => {
    return (
        <div>
            <Part part={props.couples[0][0]} exercise={props.couples[0][1]}/>
            <Part part={props.couples[1][0]} exercise={props.couples[1][1]}/>
            <Part part={props.couples[2][0]} exercise={props.couples[2][1]}/>
        </div>
    )
}
const Part = (props) => <p>{props.part} {props.exercise}</p>
const Total = (props) => <p>Number of exercises {props.exercises.reduce((curr, prev) => curr + prev, 0)} </p>

export default App
