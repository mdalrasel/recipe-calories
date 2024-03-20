import PropTypes from 'prop-types';

const Blog = ({blog, handleCard}) => {
    const {image, name, description, time, calories, ingredients } = blog ;
    
    return (
        <div >
            < div className=" space-y-4 border p-6 rounded-2xl  ">
                        
                        <img className='w-full rounded-2xl' src={image} alt="" />
                            <h2 className="text-xl font-semibold">{name}</h2>
                            <p className='text-[#878787]'>{description}</p>
                            <hr />
                        <div className='space-y-3'>
                            <h2 className='text-xl font-medium'>Ingredients: {ingredients.length}</h2>
                            <p className='text-[#878787] font-medium'>
                                {
                                    ingredients.map((ingre, idx) => <li key={idx}>{ingre}</li>).slice(0, 3)
                                }
                            </p>
                        </div>
                            <hr />
                            <div className="flex space-x-8">
                                <div className="text-[#282828cc] flex gap-2">
                                    <img className='w-6' src="../../../images/Frame (2).png" alt="" />
                                        <p>{time}</p>
                                    </div>
                                <div className=" text-[#282828cc] flex gap-2">
                                    <img className='w-6' src="../../../images/Frame (3).png" alt="" />
                                    <p>{calories}</p>
                                </div>
                            </div>
                                <button onClick={() => handleCard(blog)} className="bg-[#0BE58A] py-2 px-5 rounded-badge font-medium text-xl">Want to Cook</button>
                        
            </div>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleCard : PropTypes.func
    
}
export default Blog;