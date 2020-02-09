import PageLayout from '../../components/PageLayout';



const answerListStyle = {
  listStyle: 'upper-alpha'
}

const Problem = props => {
  const {notes, format, difficulty, text, answers} = props.problem
 
  return (
     <PageLayout>
       <h1>{notes}</h1>
      <h3>Difficulty Level: {difficulty}</h3>
      {/* Question Text */}
      <div
        style={{color: 'red'}}
        dangerouslySetInnerHTML={{__html:text}}
      ></div>
      {/* Multiple choice questions */}
      {(format === "Multiple") ? 
        <ul style={answerListStyle}>
          {answers.map(choice => <li key={choice.id}>
            <div
              style={{color: 'red'}}
              dangerouslySetInnerHTML={{__html:choice.text}}
            ></div></li>)}
        </ul> : <></>}
        {/* Fill in the Blank Quesions */}
        {(format === "Fill n The Blank") ?
          <div>
            <form>
              <input type="input"/>
            </form>
          </div> : <></>}
    </PageLayout>

  )
 
};

Problem.getInitialProps = async function({reduxStore, query}) {
  const { id } = query;
  const state = reduxStore.getState();

// use filter with id or set current problem in reducer
  return {
    problem: state.problem.currentProblem
  }
   
};

export default Problem;
