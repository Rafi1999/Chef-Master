import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const ChefCard = ({chef}) => {
    const {id,picture,name,yearsOfExperience,numberOfRecipes,likes} = chef;
    return (
              <div className="card w-80 md:w-96 bg-base-100 shadow-2xl">
  <figure className="md:px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl w-72 md:w-80 h-96" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className='grid gap-2 font-bold text-base'>
    <p>Experience : <span className='font-medium'>{yearsOfExperience} years</span></p>
    <p>Number of recipes : <span className='font-medium'>{numberOfRecipes}</span></p>
    </div>
    <div className='grid gap-3 items-center font-bold'>
      <p>Likes : <span className='font-medium'>{likes}</span></p>
      <Link to={`/chefDetails/${id}`} className='btn btn-primary'>View Recipes</Link>
    </div>
  </div>
</div>
    
    );
};

export default ChefCard;