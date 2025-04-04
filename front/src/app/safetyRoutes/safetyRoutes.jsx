import { Check } from 'lucide-react';
import { MessageSquareQuote } from 'lucide-react';
import { FileChartColumnIncreasing } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import Image from "../home/women.jpg"

function SafetyRoutes(){
    return(
        <>
            <div className="my-10 bg-gradient-to-b from-neutral-900 to-black text-white min-h-screen py-10">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col lg:flex-row justify-center gap-8">
                        <div className="rounded-xl w-full bg-neutral-800 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out p-6">
                            <div className="mb-4">
                                <div className="text-3xl font-extrabold text-white">Route Safety Map</div>
                                <div className="text-lg text-gray-300">View safety ratings before you travel</div>
                            </div>
                            <hr className="border-gray-600"/>
                            <div>
                                <form className="flex flex-col items-center py-6 space-y-4" action="">
                                    <input type="text" placeholder="Starting Point" className="text-white p-3 rounded-lg bg-red-300 w-full focus:ring-4 focus:ring-red-300 focus:outline-none hover:bg-red-400 transition" />
                                    <input type="text" placeholder="Destination" className="text-white p-3 rounded-lg bg-red-300 w-full focus:ring-4 focus:ring-red-300 focus:outline-none hover:bg-red-400 transition" />
                                    <button className="w-full bg-neutral-600 p-3 rounded-lg font-bold text-white hover:bg-neutral-700 hover:scale-105 transition-all duration-300">Find Safe Routes</button>
                                </form>
                            </div>
                            <hr className="border-gray-600"/>
                            <div className="flex justify-center p-6">
                                <div className="w-full h-74 bg-gray-200 rounded-md"></div>
                            </div>
                        </div>
                        <div className="w-full space-y-6">
                            <div className="flex gap-4 rounded-xl p-6 bg-neutral-800 shadow-lg">
                                <FileChartColumnIncreasing className='w-12 h-12 text-blue-400' />
                                <div className="text-gray-200">
                                    <div className="text-2xl font-extrabold text-white">How We Calculate Safety</div>
                                    <div className="text-lg text-gray-400 py-2">Our AI analyzes multiple data sources to provide accurate safety ratings:</div>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-2"><Check className="w-6 h-6 text-green-400" /> <span>Crime statistics and incident reports</span></li>
                                        <li className="flex items-center space-x-2"><Check className="w-6 h-6 text-green-400" /> <span>Lighting conditions and visibility factors</span></li>
                                        <li className="flex items-center space-x-2"><Check className="w-6 h-6 text-green-400" /> <span>Public transportation proximity</span></li>
                                        <li className="flex items-center space-x-2"><Check className="w-6 h-6 text-green-400" /> <span>Anonymous user reports and feedback</span></li>
                                        <li className="flex items-center space-x-2"><Check className="w-6 h-6 text-green-400" /> <span>Foot and vehicle traffic patterns</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='bg-red-300 p-4 rounded-xl border-2 border-gray-300 hover:scale-105 transition-all duration-300 shadow-lg'>
                                <MessageSquareQuote className='w-10 h-10 text-white' />
                                <blockquote className='mt-4 italic'>"SafeAura's route scanner completely changed how I travel. I feel more confident knowing which areas to avoid, especially when I'm in a new city."</blockquote>
                                <div className='font-extrabold mt-4 text-white'>- Sarah M.</div>
                            </div>
                            <div className='p-6 rounded-xl bg-neutral-800 shadow-lg'>
                                <div className='text-2xl font-extrabold text-white'>Help Improve Route Safety</div>
                                <div className='text-gray-300'>Submit anonymous reports to help other women in your community.</div>
                                <div className='mt-4 space-y-3'>
                                    <button className='bg-red-500 w-full p-3 rounded-lg text-white font-bold hover:bg-red-400 transition-all flex items-center justify-center gap-2'> 
                                        <TriangleAlert className='w-5 h-5' /> Report Unsafe Location
                                    </button> 
                                    <button className='bg-green-500 w-full p-3 rounded-lg text-white font-bold hover:bg-green-400 transition-all flex items-center justify-center gap-2'> 
                                        <ThumbsUp className='w-5 h-5' /> Confirm Safe Area
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 rounded-xl p-6 bg-neutral-800 shadow-lg'>
                        <div className='text-2xl font-extrabold text-white mb-4'>Travel Safety Tips</div>
                        <div className='grid md:grid-cols-3 gap-6'>
                            <div className='border-2 border-red-100 bg-neutral-700 rounded-lg p-4 text-gray-300 hover:scale-105 transition-all'>
                                <div className='text-xl font-extrabold text-white mb-2'>Time Your Travel</div>
                                <p>Plan trips during daylight hours when possible. Safety ratings often improve in well-lit conditions.</p>
                            </div>
                            <div className='border-2 border-red-100 bg-neutral-700 rounded-lg p-4 text-gray-300 hover:scale-105 transition-all'>
                                <div className='text-xl font-extrabold text-white mb-2'>Travel with Others</div>
                                <p>When possible, walk with friends or in groups, especially in areas with lower safety ratings.</p>
                            </div>
                            <div className='border-2 border-red-100 bg-neutral-700 rounded-lg p-4 text-gray-300 hover:scale-105 transition-all'>
                                <div className='text-xl font-extrabold text-white mb-2'>Stay Aware</div>
                                <p>Limit distractions like headphones in unfamiliar areas. Stay alert to your surroundings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SafetyRoutes