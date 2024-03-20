

const Header = () => {
    return (
        <div className="container m-auto my-5 p-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        < div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
        
                            </ul>
                     </div>
                        <a className="btn btn-ghost text-3xl font-bold text-[#150B2B]">Recipe Calories</a>
                </div>
                     <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#150b3fb3]">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                <div className="navbar-end ">
    
                    <input  type="text" placeholder="Search" className="input input-bordered  w-24 md:w-auto" />
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full bg-[#0BE58A] ">
                            <img alt="Profile" src="../../../images/Frame.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero overflow-hidden rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/0cdjJJc/Rectangle-1.png)'}}>
 
                <div className="hero-content text-center text-neutral-content py-32">
                    <div className="max-w-[840px]">
                        <h1 className="mb-5 text-2xl md:3xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Located in the heart of Baltimore’s Arbutus neighborhood, Our Recipes Cafe is a nostalgic blend of coffee house vibes, neighborhood convene and Grandma’s home cooking.</p>
                        <div className="sm:space-x-4 space-x-10">
                            <button  className="text-black bg-[#0BE58A] rounded-badge px-7 py-2 ">Explore Now</button>
                            <button className=" rounded-badge px-7 py-2 border">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;