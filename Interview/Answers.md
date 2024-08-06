### 1. What is the difference between var, let, and const in JavaScript?

- Let,var,const are used to declaring variables,The main important difference is let declared variables have a properties of updating but we can't re declare the variables twice.Const declared variables are secured variables where it will not posible to updating and re declaring,and var declared variables have both updating and re declaring properties with its scope.


### 2. How do you create a new React component?

- React component is used to splits the overall website functionality into various components,so we usually create a components with in the src folder or we can create our coustom folder like 'component',where with in that folder we created a file for exmaple 'component.jsx', we should declare the exported function with  returning some functionalities and we should import the function name with import keyword the we can use that component only in the returning statements with in the angle brackets.


### 3. What is the purpose of the render() method in a React component?


- render() method is important in component life cycle of mounting,updating,unmounting.This method re-renders the component when a useStates are changed or initlized and it re-render(refresh page) even single component changes


### 4. How do you pass props to a React component?


- We pass props as like parameter in a component function where that props have a ability of storing data,where data might be passed from another component for exmaple I passed a value within the conponent of angler brackets like 'name="hello"' then that component props stores the property of name have a value of "hello" so we can use that data in this component. 


### 5. What is the purpose of the key prop in a React component

- Key prop of React component is uses to maintain the uniqueness of list of data for example if a compo haveing list of poducts so every product have a unique id which is passed through 'key' pro if a data did't have id we can pass the index as a key using the map method.


### 6. How do you handle events in a React component.


-  We create functions for handle the events,like for example changes some data when the button will tapped.Same as handle the update events.


### 7. What is the difference between a functional component and a class component in React?

-  Both have a similar functionalities having the different syntax where function component is defined using the function keyword word and returns the statements,But in class component we used the inheretence of built in react component which having a function render inside that returning statements will happen.

### 8. How do you use React Hooks?

-  Hooks are the functions in react providing the different functionalities

- useState - this function use to assign a a value to the variable and its function variable ,it re-renders every time it changes the useState
- useEffect - This function main used to fetching the data from server because it wroks with the lifecycle of a components it re-renders for every life cycle.
- useContext - This function is used to fetch the content of createContext where it make the container that its data can easily used for some components using the useState.

### 9. What is the purpose of the useEffect() hook in React?

- This function basically works on the life cycle of the components are Mounting,Updating,Unmounting,whenever a lifecycle happens  mounting of data(assigning and showing data in interface) and Updating(Updating the previous data) and Unmounting(removing or hinding data) useEffect works.

- useEffect have a callback function which we can pass the data or get data and it have a secound parameter of dependancy variable that we can choose the variable whenever it changes useEffect function works
- Simply useEffect triggers and runs when re-render occurs,mainly uder for data fetching.


### 10. How do you fetch data from an API in a React component?

- We can fetch the data form any API using the React built in fetch function or we can install external library 'axios'.




### 11. What is the purpose of the useContext() hook in React?

- This function is used to fetch the content of createContext where it make the container that its data can easily used for some components using the useState insted of making multiple useStates in multiple components we can use createContext and useContext provides a separate environment for using data.


### 12. How do you use React Router for client-side routing?

- First we need to import the BrowserRoute and Routes,Route from react dom then after we stats with BrowserRoute inside that Routes inside that we Route for specific paths we need to provide element of component.Whenever that path is entered in the search bar that component inside element will come to interface.we can put path manually in search bar or we can place a button which changes the path using the Link from react-dom.


### 13.How do you optimize the performance of a React application?

- We can optimize the performance of react by dividing the big tasks into    small pices of components.Not only in the client side we need to divide the task in the backend for better understanding.   

### 14. How do you handle state changes in a React component?


- Bye using the useState hook we can hande state  in functional components.
- for example if we want to increment a value when presses button insted of creating a variable we can create a varable anf functional varable where varable for displaying and we handle the increment property using functional varable of useState.                       






