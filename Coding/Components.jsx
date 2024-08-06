import React, { useState, useEffect, useContext, useRef} from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import '../Coding/Components.css';

// 1. Displaying Array of Items
const ItemList = ()=>{

  const[items,setItems] = useState([{name:"Sai"},{name:"Kiran"},{name:"Bunny"}])

  return(
      <>
      <h2>1. Display a list of items from an array</h2>
      {
        
          items.map((elm,index)=>{
              return(
                  <>
                  <h3 key={index}>{elm.name}</h3> 
                  </>)
          })
      }
      </>
  )
}


// 2. Counter component
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>2. Counter component</h2> 
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={()=>{
        setCount(0)
      }}>Reset</button>
    </div>
  );
};


// 3. Fetch data from an API and display it
const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h3>3. Fetch data from an API and display it</h3>
      {data ?
       JSON.stringify(data.fact) : 
       'Loading...'}
    </div>
  );
};

// 4. Handle form submission and validation
const Form = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setError('Input cannot be empty');
    } else {
      setError('');
      alert(`Submitted: ${input}`);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>4. Handle form submission and validation</h3>
      <input type="text" value={input} onChange={(data) => setInput(data.target.value)} />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
};


// 5. Pagination component
const PaginatedList = () => {
  const items = [{name:"Saikiran"}, {name:"Bunny"}, {name:"Bharani"}, {name:"Sunny"},{name:"Shyam"}, {name:"Varun"}];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const St=(currentPage-1)*itemsPerPage;
  const currentItems = items.slice(St, St + itemsPerPage);

  return (
    <div>
      <h3>5. Pagination Component</h3>
      <ul>
        {currentItems.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
      <div>
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>Page 1</button>
        <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>Page 2</button>
      </div>
    </div>
  );
};

//6. React Routing
const Home = () => { return(<h2>Home</h2>)};
const About = () => {return(<h2>About</h2>)};

const ReactRoute = () => (
  <BrowserRouter>
    <div>
      <h3>6. React Routing</h3>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route  path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  </BrowserRouter>
);

// 9. Handle authentication and authorization
const AuthComp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () =>
    setIsAuthenticated(true);
  const logout = () => 
    setIsAuthenticated(false);

  return (
    <div>
      <h3>9. Handle authentication and authorization</h3>
      {isAuthenticated ? (
        <>
          <p>Welcome,Man!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in to Continue..</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

// 10. React Context for state management
const MyContext = React.createContext();

const ContextComp = () => {
  const [data, setData] = useState('Initial Value');
  return (
    <MyContext.Provider value={{ data, setData }}>
      <ChildComp />
    </MyContext.Provider>
  );
};

const ChildComp = () => {
  const { data, setData } = useContext(MyContext);
  return (
    <div>
      <h3>10. React Context for state management</h3>
      <p>{data}</p>
      <button onClick={() => setData('You Updated Sucessfully!')}>Update Value</button>
    </div>
  );
};

// 18. React  Ref for DOM manupulation


const RefComp = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = 'lightblue';
    }
  };

  return (
    <div>
      <h3>18. React Ref for DOM Manipulation</h3>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me!" />
      <button onClick={handleButtonClick}>Focus & Change Color</button>
    </div>
  );
};


const VirtualizedList = () => {
  const items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
  ];

  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      {items.map((data, index) => (
        <div key={index} style={{ height: '20px', padding: '5px', borderBottom: '1px solid #fad' }}>
          {data}
        </div>
      ))}
    </div>
  );
};
const App = () => {
  return (
    <div>

      <h1>React Components</h1>
      <ItemList />
      <Counter/>
      <FetchData/>
      <Form />
      <PaginatedList/>
      <ReactRoute/>
      <AuthComp/>
      <ContextComp/>
      <RefComp/>
      <VirtualizedList/>
      
      
      
      
    </div>
  );
};

export default App;
