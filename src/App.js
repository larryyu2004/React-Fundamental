// Parent passes Son
// 1. Parent Component passes data
// 2. Child Component receives data

function Son(props){
  console.log(props)
  // props contains all the data from parent component
  return <div>this is son, {props.name}</div>
}

function App() {
  const name = 'this is app name'
  return (
    <div className="App">
      <Son 
      name={name}
      age={18}
      isTrue={false}
      list={['vue', 'react']}
      obj = {{ name: 'jask' }}
      cb={() => console.log(123)}
      child={<span>this is span</span>}
      />
    </div>
  );
}
export default App;
