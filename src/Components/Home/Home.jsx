import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('https://chef-master-server-rafi1999.vercel.app/chefData')
        .then(res=>res.json())
        .then(data=> setChefs(data))
        .catch(err =>console.log(err))
    },[])

    return (
        <div>
        <section className='flex justify-around items-center mt-2 mx-10'>
        <div className='w-2/4'>
        <h3 className='font-semibold text-3xl'>Welcome to Chef Master Bangladesh</h3>
        <p className='mt-2 text-slate-400 w-5/6'>Here we have for you the  master chef of Bangladesh.<br></br> We have their top 3 best recipe which you can now make in your home and treat your family and friends with magic of food.</p>
        </div>
        <div className="carousel w-2/4">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://imgmedia.lbb.in/media/2021/0/5dfb6c19-a589-4397-8d9d-72c54c44342d.jpg" className="object-contain object-center w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.unveil.press/wp-content/uploads/2021/09/89d036bc4157a5dcad9b29b952716529.jpg" className="object-contain object-center w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://www.lacademie.com/wp-content/uploads/2022/01/kacchi-biryani.jpg" className="object-contain object-center w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://static.india.com/wp-content/uploads/2017/04/Bengali_Fish_meal.jpg?impolicy=Medium_Resize&w=1200&h=800" className="object-contain object-center w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </section>
        <section className='my-5'>
        <h3 className='text-center underline text-3xl font-serif font-semibold my-3'>Best Chef of Bangladesh</h3>
            <div className='grid grid-flow-col grid-rows-2 gap-3 mx-28'>
            {
                chefs.map(chef=>
                <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
            </div>
        </section>  
        <section className='my-2'>
          <h3 className='text-center underline text-3xl font-serif font-semibold my-6'>Featured Post</h3>
          <div className='flex justify-center gap-5'>
          <div className='text-center'>
          <img src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" className='w-96 h-96' alt="" />
          <h5 className='font-semibold text-xl'>Best Biriyani in Chittagong</h5>
          <p>December 2022</p>
          </div>
          <div className='text-center'>
          <img src="https://kitchenofdebjani.com/wp-content/uploads/2022/10/Morog-Pulao-Recipe-Debjanir-Rannaghar.jpg" className='w-96 h-96' alt="" />
          <h5 className='font-semibold text-xl'>Best Morog Polao in Dhaka</h5>
          <p>December 2022</p>
          </div>
          <div className='text-center'>
          <img src="https://imagevars.gulfnews.com/2021/09/20/Guide-to-making-seekh-kebab-naan-_17c02cff737_original-ratio.jpg" className='w-96 h-96' alt="" />
          <h5  className='font-semibold text-xl'>Best Shikh Kabab in Bangladesh</h5>
          <p>February 2023</p>
          </div>
          </div>
        </section>
        <section className='my-5'>
        <div className="grid justify-center stats shadow">
  
        <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Social Media Followers</div>
    <div className="stat-value text-primary">10.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">1.5M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  </div> 
</div>
        </section>  
        </div>
    );
};

export default Home;