import Image from "../home/women.jpg"
function  Home(){
    return(
        <> 
            <div className="bg-gradient-to-b from-neutral-900 to-black text-white md:flex flex-col lg:flex-row min-h-screen items-center lg:space-x-12 p-8 lg:p-14 lg:space-x-12">
                <div className="py-8 lg:py-22 text-center lg:text-left">
                    <div className="font-extrabold text-6xl py-6 leading-tight">Your Digital Guardian For Everyday {" "} 
                        <span className="text-red-300 underline decoration-dotted">Safety</span>
                    </div>
                    <div className="text-xl text-gray-300 tracking-wide py-3">
                        SafeAura uses AI to protect women in public and private spaces, giving you peace of
                        mind wherever you go.
                    </div>
                    <div className="flex py-6 flex-col sm:flex-row justify-center lg:justify-start items-center sm:space-x-5">
                        <button className="px-6 py-3 my-4 lg:my-0 bg-red-300 rounded-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-red-400 hover:scale-110">Get SfeAura Now</button>
                        <button className="px-6 py-3 border-2 border-red-300 rounded-lg text-red-200 font-semibold shadow-md transition-all duration-300 ease-in-out hover:text-white hover:bg-red-300 hover:scale-110">Learn How It Works</button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center relative">
                    <img className="w-1/2 lg:w-full max-w-md sm:max-w-lg rounded-lg shadow-2xl opacity-100 transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105" src={Image} alt="Women's" />
                    <div className="absolute bg-rose-400 opacity-10 my-6 blur-xl rounded-full w-40 h-4 0 mx-auto animate-pulse"></div>
                </div>
            </div>
        </>
    )
}

export default Home ;