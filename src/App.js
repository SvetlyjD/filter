import './App.css';
import { useEffect, useState } from "react"

function App() {
  let a = [{ name: 4.5, age: 23 }, { name: 3, age: 25 }, { name: 5, age: 23 }, { name: 5, age: 27 }]
  const [showName, setShowName] = useState(0);
  const [showAge, setShowAge] = useState(0);
  const nameFiltr = [4.5, 3, 5];
  const ageFiltr = [22, 24, 26];
  const [age, setAge] = useState(0);
  const [name, setName] = useState(0)
  let c = Object.assign(a);
  let [b, setB] = useState(c);

  // console.log("bbbbb", b)
  const filterShowName = () => {
    !showName ? setShowName(1) : setShowName(0)
  }

  const filterShowAge = () => {
    !showAge ? setShowAge(1) : setShowAge(0)
  }

  const filterName = (data) => {
    setName(data);
    name === 0 && age === 0 ? b = a.filter(item => item.name > data) : b = b.filter(item => item.name > data);
    setB(b);
    console.log("name", b);

  }

  const filterAge = (data) => {
    setAge(data);
    name === 0 && age === 0 ? b = a.filter(item => item.age > data) : b = b.filter(item => item.age > data);
    console.log("age", b);
    setB(b);
  }

  // useEffect(() => {
  //   name != 0 ? a = a.filter(item => item.name > name) : console.log("name", a);
  //   age != 0 ? a = a.filter(item => item.age > age) : console.log("age", a);
  //   setB(a);
  // }, [age, name])

  return (
    <div className="App">
      <div><h2>Фильтр</h2></div>
      {b.map((item, index) =>
        <div key={index}>
          <h3>{item.name} - {item.age}</h3>
        </div>
      )}
      <div className='wrapperFilter'>
        <div>
          <div onClick={() => filterShowAge()} className="blockFilterAge" >
            <div>По возрасту, больше<div>{age}</div></div>
            <div>
              {showAge ?
                <div className='filterDataAge'>
                  {ageFiltr.map((item, index) =>
                    <div className='itemFilter' onClick={() => filterAge(item)} key={index}>{item}</div>
                  )}
                </div>
                :
                <div></div>}
            </div>
          </div>
        </div>
        <div>
          <div onClick={() => filterShowName()} className="blockFilterName"> <div>По имени, больше <div>{name}</div></div>
            <div>
              <div>
                {showName ?
                  <div className='filterDataName'>
                    {nameFiltr.map((item, index) =>
                      <div className='itemFilter' onClick={() => filterName(item)} key={index}>{item}</div>
                    )}
                  </div>
                  :
                  <div></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
