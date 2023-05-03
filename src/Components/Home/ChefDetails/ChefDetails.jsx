import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Recipe from '../../Recipe/Recipe';

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
        <h3 className='text-center my-4 font-semibold text-3xl font-sans text-orange-500 underline'>Top 3 Recipe</h3>
        {recipes.map((recipe,i)=><Recipe key={i} recipe={recipe}></Recipe>
        )}
        </div>
        </section>
    );
};

export default ChefDetails;