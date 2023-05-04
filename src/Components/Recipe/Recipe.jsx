import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({recipe}) => {
    const {name,ingredients,cookingMethod,rating} = recipe;
    const [show,setShow] = useState(true);
    const handleFav=()=>{
        toast.success("Favourite Recipe")
        setShow(false);
    }
    return (
        <div className='mx-20'>
            <div className="card w-full bg-base-200 shadow-md my-5 px-2">
  <div className="card-body">
    <h2 className="card-title">Recipe Name : {name}</h2>
    <p ><span className='font-semibold'>Ingredients : </span>{ingredients}</p>
    <p ><span className='font-semibold'>Cooking Method : </span>{cookingMethod}</p>
    <div className='grid grid-flow-col justify-start gap-3 items-center'>
    <p className='font-semibold'>Rating : </p>
    <p>{rating}</p>
    <Rating
    placeholderRating={rating}
    readonly
    emptySymbol={<FaRegStar></FaRegStar>}
    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
    fullSymbol={<FaStar></FaStar>}
    ></Rating>
    </div>
    <div className="card-actions justify-end">
      <button onClick={handleFav} disabled={!show} className="btn btn-circle btn-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Recipe;