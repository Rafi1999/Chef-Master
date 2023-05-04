import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div>
         <Pdf targetRef={ref} filename="answer.pdf" x={3} y={18} scale={.5}>
        {({ toPdf }) => <button className='btn btn-warning mt-2 text-white mx-2 py-2' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
            <div ref={ref}  className='my-5 grid justify-center'>
            <h3 className='text-3xl text-center underline font-semibold' >Answer to some common questions</h3>
            <div className="card bg-orange-300 shadow-xl my-2">
  <div className="card-body">
  <p className='text-xl font-medium'>1. Tell us the differences between uncontrolled and controlled components.</p>
  <p><span className='text-xl font-medium'>Ans : </span>In React, Controlled components are those that are completely controlled by React. This means that the data or state of the component is managed by the parent component, and the child component simply displays that data or state. In other words, the parent component controls the state of the child component by passing down props that define the state of the component. Uncontrolled components, on the other hand, are those that manage their own state internally and do not rely on the parent component to manage their state. In this case, the state of the component is managed by the component itself, and the parent component has no control over it.</p>
  </div>
</div>
            <div className="card bg-orange-300 shadow-xl my-2">
  <div className="card-body">
  <p className='text-xl font-medium'>2. How to validate React props using PropTypes.</p>
  <p><span className='text-xl font-medium'>Ans : </span>PropTypes can help catch errors early in the development process and make your code more reliable.To use PropTypes, you need to import it from the prop-types library and add the appropriate type validation to your components propTypes property.The propTypes property contains an object with a message key that is assigned the value of PropTypes.string.isRequired. This means that the message prop passed to the component must be a string and is required.
Here are some common PropTypes types:
PropTypes.string,
PropTypes.number,
PropTypes.bool,
PropTypes.array,
PropTypes.object,
PropTypes.func,
PropTypes.element,
PropTypes.instanceOf(MyClass).</p>
  </div>
</div>
            <div className="card bg-orange-300 shadow-xl my-2">
  <div className="card-body">
  <p className='text-xl font-medium'>3. Tell us the difference between nodejs and express js.</p>
  <p><span className='text-xl font-medium'>Ans : </span>Node.js is an open-source JavaScript runtime built on the Chrome V8 engine. It allows you to run JavaScript on the server-side and provides an event-driven, non-blocking I/O model that makes it highly scalable and efficient. Node.js comes with a built-in set of modules and APIs that you can use to build server-side applications.Express.js, on the other hand, is a popular web application framework for Node.js. It provides a set of features and tools that make it easier to build web applications and APIs on top of Node.js. Express.js is built on top of Node.js and uses its features</p>
  </div>
</div>
            <div className="card bg-orange-300 shadow-xl my-2">
  <div className="card-body">
  <p className='text-xl font-medium'>4. What is a custom hook, and why will you create a custom hook?</p>
  <p><span className='text-xl font-medium'>Ans : </span>A custom hook is a JavaScript function that uses one or more of the built-in React hooks (such as useState or useEffect) to provide a reusable piece of functionality for React components.Reason to create custom hook are : custom hook can be a great way to abstract that functionality into a reusable piece of code,Custom hooks can encapsulate complex logic or behavior, making your components simpler and easier to read and maintain,Custom hooks can abstract away low-level implementation details, allowing you to focus on the higher-level functionality of your components,Custom hooks can be unit tested in isolation, making it easier to test and debug your application.</p>
  </div>
</div>
        </div>
        </div>
    );
};

export default Blog;