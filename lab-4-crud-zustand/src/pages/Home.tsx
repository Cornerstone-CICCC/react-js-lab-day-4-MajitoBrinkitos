import AddPost from './AddPost';

function Home(){

    return(
        <div className=" grid grid-cols-3 gap-4 h-180 place-content-center bg-white">
            <h1 className="col-start-2 col-end-3 border border-black rounded-md p-8 flex justify-center align-content-center bg-pink-900 text-white">Welcome to my Blog Page</h1>
            <p className="col-start-2 col-end-3 justify-center align-content-center py-3 text-black">Let's start planning your day</p>
        
                    <AddPost />
        </div>
    );
}

export default Home;