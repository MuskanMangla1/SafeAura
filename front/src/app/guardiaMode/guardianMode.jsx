import { useState } from 'react'; // ✅ Added missing import
import { Dot } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { MessageSquareQuote } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Trash2 } from 'lucide-react';
function GuardianMode() {
    const [isToggled, setIsToggled] = useState(false);
    const [batteryToggled , setIsBatteryToggled] = useState(false) ;
    const [isActive , setIsActive] = useState(false) ;
    return (
        <>
            <div className="my-8 flex flex-col lg:flex-row bg-gradient-to-b from-neutral-900 from-20% to-black text-white min-h-screen py-4 space-x- justify-center">
                <div className="w-full">
                    <div className="bg-neutral-800 p-4 rounded-md m-8">
                        <div className="text-2xl font-extrabold my-2">Guardian Mode Controls</div>
                        <div className={`flex bg-red-300 rounded-md p-4 m-2 border border-white justify-between items-center hover:scale-103 transition-all duration-200 ease-in-out ${isActive ? "scale-102 transition-all easy-in-out duration-300" : "opacity-50"}`}>
                            <div className='text-xl'>Guardian Mode Inactive</div>
                            <button className={`bg-red-400 p-2 rounded-md ${isActive ? "scale-102 transition-all easy-in-out duration-300" : ""}`} onClick={() => setIsActive(!isActive)}>
                                {isActive ? "Deactivate" : "Activate"}
                            </button>
                        </div>
                        <div className='my-4'>
                            <div className='my-2'>Share with guardians:</div>
                            <div className="flex items-center justify-between m-4">
                                <div className='flex space-x-2'>
                                    <MapPin className='text-red-300' />
                                    <div>Location Tracking</div>
                                </div>
                                <div className="flex justify-center items-center">
                                <div 
                                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 mx-2 shadow-lg ${
                                    isToggled ? "bg-red-400" : "bg-gray-300"}`} onClick={() => setIsToggled(!isToggled)}>
                                                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                                                isToggled ? "translate-x-6" : "translate-x-0"}`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between m-4">
                                <div className='flex space-x-2'>
                                    <BatteryCharging className='text-red-300' />
                                    <div>Battery/Power Alerts</div>
                                </div>
                                <div className="flex justify-center items-center">
                                <div 
                                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 mx-2 shadow-lg ${
                                    batteryToggled ? "bg-red-400" : "bg-gray-300"}`} onClick={() => setIsBatteryToggled(!batteryToggled)}>
                                                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                                                batteryToggled ? "translate-x-6" : "translate-x-0"}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="font-semibold">Session Duration</div>
                            <div className="flex space-x-4 my-6">
                                <button className="bg-neutral-300 w-full p-2 rounded-md text-neutral-700 opacity-50 font-extrabold hover:bg-neutral-400 hover:scale-105 transition-all duration-300 ease-in-out">30 min</button>
                                <button className="bg-neutral-300 w-full p-2 rounded-md text-neutral-700 opacity-50 font-extrabold hover:bg-neutral-400 hover:scale-105 transition-all duration-300 ease-in-out">1 hour</button>
                                <button className="bg-neutral-300 w-full p-2 rounded-md text-neutral-700 opacity-50 font-extrabold hover:bg-neutral-400 hover:scale-105 transition-all duration-300 ease-in-out">2 hours</button>
                                <button className="bg-neutral-300 w-full p-2 rounded-md text-neutral-700 font-extrabold hover:bg-white hover:scale-105 transition-all duration-300 ease-in-out">Custom</button>
                            </div>
                        </div>
                        <button className="m-bg-green-500 px-4 py-2 rounded-md bg-white w-full my-4 text-neutral-700 font-extrabold hover:bg-neutral-200 hover:scale-103 transition-all duration-300 ease-in-out">Start Guardian Mode</button>
                    </div>
                    <div className='bg-neutral-800 p-4 m-8 text-neutral-100 rounded-md hover:scale-102 hover:bg-neutral-700 border-1 border-white transition-all duration-300 ease-in-out shadow-lg shadow-neutral-400/30'>
                        <MessageSquareQuote className='my-2 w-8 h-8'/>
                        <div className='my-2'>
                        "Guardian Mode has been a lifesaver during my late-night commutes. My parents can check that I'm safe without me having to constantly text them. The automatic alerts give us all peace of mind."</div>
                        <div className='font-extrabold my-2 text-xl'>Michelle K.</div>
                    </div>
                </div>
                <div className="w-full my-8">
                    <div className=" bg-neutral-800 round-md p-6 rounded-md">
                        <div className='text-2xl font-bold'>Your Trusted Guardians</div>
                        <div className='flex justify-between bg-neutral-500 my-4 p-2 rounded-md hover:bg-neutral-600 hover:scale-103 transition-all duration-300 ease-in-out'>
                            <div className='flex items-center'>
                                <div className='bg-white rounded-full w-10 h-10'></div>
                                <div className='mx-2'>
                                    <div className='font-extrabold'>Jessica Davis</div>
                                    <div>Sister</div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <Phone className='bg-neutral-700 p-1 opacity-70 rounded-md mx-2'/>
                                <MessageCircleMore className='bg-neutral-700 p-1 opacity-70 rounded-md' />
                                <Trash2  className='bg-neutral-700 p-1 opacity-70 rounded-md mx-2' />
                            </div>
                        </div>
                        <div className='flex justify-between bg-neutral-500 my-4 p-2 rounded-md hover:bg-neutral-600 hover:scale-103 transition-all duration-300 ease-in-out'>
                            <div className='flex items-center'>
                                <div className='bg-white rounded-full w-10 h-10'></div>
                                <div className='mx-2'>
                                    <div className='font-extrabold'>Jessica Davis</div>
                                    <div>Sister</div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <Phone className='bg-neutral-700 p-1 opacity-70 rounded-md mx-2'/>
                                <MessageCircleMore className='bg-neutral-700 p-1 opacity-70 rounded-md' />
                                <Trash2  className='bg-neutral-700 p-1 opacity-70 rounded-md mx-2' />
                            </div>
                        </div>
                        <button className='text-xl block mx-auto border-2 border-neutral-200 border-dashed w-full p-4 rounded-md'>
                            + Add new guardian
                        </button>
                    </div>
                    <div className='bg-neutral-800 rounded-md my-6 p-4'>
                        <div className='text-2xl font-extrabold my-2'>How Guardian Mode Protects You</div>
                        <div className='flex space-x-4'>
                            <div className='bg-neutral-200 rounded-full w-10 h-10 text-neutral-800 flex items-center justify-center font-extrabold'>1</div>
                            <div>
                                <div className='text-xl'>Real-time Location Sharing</div>
                                <div className='text-neutral-400'>Your trusted contacts can see your precise location and movement during active sessions.</div>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div className='bg-neutral-200 rounded-full w-10 h-10 text-neutral-800 flex items-center justify-center font-extrabold'>2</div>
                            <div>
                                <div className='text-xl'>Movement Anomaly Detection</div>
                                <div className='text-neutral-400'>AI detects if you stop moving unexpectedly or deviate from normal patterns jkdcdsvsdvsvk.</div>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div className='bg-neutral-200 rounded-full w-10 h-10 text-neutral-800 flex items-center justify-center font-extrabold'>3</div>
                            <div>
                                <div className='text-xl'>Device Power Monitoring</div>
                                <div className='text-neutral-400'>Alerts are sent if your phone suddenly turns off or battery depletes rapidly cusidcsfsdsdasjks.</div>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div className='bg-neutral-200 rounded-full w-10 h-10 text-neutral-800 flex items-center justify-center font-extrabold'>4</div>
                            <div>
                                <div className='text-xl'>Optional Audio Sharing</div>
                                <div className='text-neutral-400'>Share ambient audio with your guardians for additional safety monitoring vveriuferw.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuardianMode;
