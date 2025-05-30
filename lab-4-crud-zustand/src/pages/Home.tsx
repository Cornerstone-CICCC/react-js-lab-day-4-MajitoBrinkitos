import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const Navigate = useNavigate();

    return(
        <div className=" grid grid-cols-3 gap-4 h-180 place-content-center bg-white">
            <h1 className="col-start-2 col-end-3 border border-black rounded-md p-8 flex justify-center align-content-center bg-pink-900 text-white">Welcome to my Blog Page</h1>
        </div>
    );
}

export default Home;