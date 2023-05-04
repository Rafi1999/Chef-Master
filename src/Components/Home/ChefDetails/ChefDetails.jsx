import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Recipe from '../../Recipe/Recipe';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const chef = useLoaderData();
    const {id,picture,name,yearsOfExperience,numberOfRecipes,likes,description,recipes} = chef;
    console.log(description);
    return (
        <section>
            <div className='grid justify-center'>
            <div className=" w-full bg-base-100 mt-5 flex justify-center mx-10 items-center">
  <figure className=" object-fill w-96">
  <LazyLoad  height={600} offset={300}><img src={picture} alt="Shoes" className="rounded-xl" /></LazyLoad>
    
  </figure>
  <div className="card-body w-96 mr-20">
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
        <h3 className='text-center my-5 font-semibold text-3xl font-sans underline'>Top 3 Recipe</h3>
        {recipes.map((recipe,i)=><Recipe key={i} recipe={recipe}></Recipe>
        )}
        </div>
        </section>
    );
};

export default ChefDetails;