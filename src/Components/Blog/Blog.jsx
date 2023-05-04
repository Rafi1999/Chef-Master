import React from 'react';

const Blog = () => {
    return (
        <div className='my-4 grid justify-center'>
            <h3 className='text-3xl text-center font-semibold' >Answer to some common questions</h3>
            <div className="card bg-orange-300 shadow-xl my-2">
  <div className="card-body">
  <p className='text-xl font-medium'>1. Tell us the differences between uncontrolled and controlled components.</p>
  <p><span className='text-xl font-medium'>Ans : </span>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
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
  <p className='text-xl font-medium'>1. Tell us the differences between uncontrolled and controlled components.</p>
  <p><span className='text-xl font-medium'>Ans : </span>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
  </div>
</div>
        </div>
    );
};

export default Blog;