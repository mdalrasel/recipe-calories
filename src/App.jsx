
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog';
import { useState } from 'react';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  
function App() {
 
  const [blogs, setBlogs] = useState([]);
  const [card, setCard] = useState([])
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  
  useEffect(() =>{
      fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))

  },[]);
 
  const handleCard = blog =>{
      const isExist = card.find(pd => pd.id == blog.id);
      if(!isExist){
          setCard([...card, blog])
      }
      else{
        toast("Already Exist")
      }
  };

  const preparing =(id) =>{
    const item = card.find(item => item.id === id);
    setCurrentlyCooking([...currentlyCooking, item]);
    const newCard = card.filter( item => item.id != id )
    setCard(newCard)
  }

  let totalTime = 0;
let totalCalories = 0;

currentlyCooking.forEach(item => {
  totalTime += parseInt(item.time);
  totalCalories += parseInt(item.calories);
});

  return (
    <>
      <Header></Header>
      <div className='container m-auto'>
      <div className="text-center mb-10 ">
        <h1 className="text-4xl font-semibold text-[#150B2B] mb-6">Our Recipes</h1>
        <p className="md:w-[750px] m-auto text-[#150b3f99]">Located in the heart of Baltimore’s Arbutus neighborhood, Our Recipes Cafe is a nostalgic blend of coffee house vibes, neighborhood convene and Grandma’s home cooking. </p>
      </div>
      
      <div className="main-container flex justify-between mb-20 p-4 gap-4">
                  <div className="w-3/5 cards-container grid grid-cols-2 gap-4">
                      {
                          blogs.map(blog => <Blog handleCard={handleCard}  key={blog.id} blog={blog} ></Blog>)
                      }
                          
                  </div>
                  <div className="w-2/5 card-container border text-center rounded-2xl"> 
                      <h2 className="text-2xl font-semibold bor border-b-2 p-4">Want to cook: 0{card.length}</h2>
                      <table>
                          <thead>
                              <tr className="w-3/4 gap-14 mt-4 flex px-10 text-[#878787] font-medium">
                                <th >Name</th>
                                <th >Time</th>
                                <th >Calories</th>
                              </tr>
                          </thead>
                          <tbody >
                          {card.map((item, index) => (
                             <tr key={item.id} className="justify-between flex text-[#282828b3] gap-4 items-center p-2">
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.time}</td>
                                <td>{item.calories}</td>
                                <td>
                                <button onClick={()=> preparing(item.id) } className='font-medium text-[#150B2B] bg-[#0BE58A] px-6 py-2 rounded-badge'> Preparing</button>
                                <ToastContainer />
                                </td>
                              </tr>
                              ))}
                          </tbody>
                      </table>
                      <hr />
                      <div>
                      <h2 className="text-2xl font-semibold bor border-b-2 p-4">Currently cooking: 0{currentlyCooking.length} </h2>
                      <table>
                          <thead>
                            <tr className="gap-20 mt-4 flex justify-end px-10 text-[#878787] font-medium">
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                          </thead>
                          <tbody >
                            {currentlyCooking.map((item, index) => (
                             <tr key={item.id} className="justify-between flex text-[#282828b3]  gap-8 items-center p-2">
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.time}</td>
                                <td>{item.calories}</td>
                              </tr>
                              ))}
                          </tbody>
                      </table>    
                      <div className='flex gap-10 justify-end pr-5'>
                        <h2 className='text-[#282828cc] font-medium text-xl'>Total Time: <br /> {totalTime} minutes</h2>
                        <h2 className='text-[#282828cc] font-medium text-xl' >Total Calories: <br />{totalCalories} calories</h2>
                      </div>
                  </div>
                  </div>
                  
                  
      </div>
      </div>
    
    </>
  )
}

export default App
