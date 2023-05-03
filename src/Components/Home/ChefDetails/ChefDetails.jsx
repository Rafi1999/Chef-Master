import React from 'react';
import {useLoaderData} from 'react-router-dom'
const ChefDetails = () => {
    const chef = useLoaderData();
    const {id,picture,name,yearsOfExperience,numberOfRecipes,likes,description,recipes} = chef;
    console.log(description);
    return (
        <section>
            <div className='grid justify-center'>
            <div className="card w-full bg-base-100 mt-4">
  <figure className=" object-fill">

    <img src={picture} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <div className='grid gap-2 font-bold text-base'>
    <p>Experience : <span className='font-medium'>{yearsOfExperience} years</span></p>
    <p>Number of recipes : <span className='font-medium'>{numberOfRecipes}</span></p>
    <p>Description : <span className='font-medium'>{description}</span></p>
    </div>
    <div className='grid gap-3 items-center font-bold'>
      <p>Likes : <span className='font-medium'>{likes}</span></p>
    </div>
  </div>
</div>
        </div>
        <div>
        <h3 className='text-center my-4 font-semibold text-3xl'>Recipe Table</h3>
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="active">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
        </section>
    );
};

export default ChefDetails;