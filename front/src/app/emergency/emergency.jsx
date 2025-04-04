import { Phone } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Trash2 } from 'lucide-react';
function Emergency() {
    return (
            <div className='bg-gradient-to-b from-neutral-900 from-20% to-black text-white min-h-screen pb-8'>
                <div className="my-8 flex flex-col lg:flex-row pt-4 justify-center">
                    <div className="w-full">
                        <div className="bg-neutral-800 p-6 m-8 rounded-md">
                        <div className="text-2xl font-extrabold mb-6">Configure Your Call</div>
                    <div>
                        <label htmlFor="callerIdentity">Caller Identity</label>
                        <input type="text" name="callerIdentity" className="bg-neutral-400 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-neutral-200 focus:outline-none hover:border-red-200 transition my-2" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="VoiceScript">AI Voice Script (if you answer)</label>
                        <select name="VoiceScript" className="mt-2 bg-neutral-700 w-full rounded-md p-2">
                            <option value="WorkEmergency">Work Emergency</option>
                            <option value="FamilyEmergency">Family Emergency</option>
                            <option value="RoommateNeedsHelp">Roommate Needs Help</option>
                        </select>
                    </div>

                    <div className="text-neutral-600 mb-4">AI will generate a realistic conversation based on your selection.</div>

                    <div className="flex space-x-2">
                        <button className="bg-green-400 font-extrabold w-1/2 p-2 rounded-md">Schedule Call</button>
                        <button className="bg-red-400 font-extrabold w-1/2 p-2 rounded-md">Trigger Now</button>
                    </div>
                </div>
                <div className="bg-neutral-800 p-6 m-8 rounded-md">
                    <div className="text-2xl font-extrabold mb-2">Text Message Excuses</div>
                    <div className="text-neutral-600 mb-4">AI generates contextual excuses you can send to friends to create a believable exit reason.</div>
                    <button className="w-full bg-purple-400 p-2 rounded-md font-extrabold">Generate Excuse Text</button>
                </div>
            </div>
            
            <div className="w-full px-8 lg:pt-8 lg:px-0 lg:pr-8">
                <div className="bg-neutral-800 p-6 rounded-md">
                    <div className="text-2xl font-extrabold mb-2">Set Up Your SOS</div>
                    <div  className="text-xl">Tap pattern</div>
                    <button className='text-xl block mx-auto border-2 border-neutral-200 bg-neutral-700 border-dashed w-full p-2 m-2 rounded-md'>
                        Tap to Set Pattern
                    </button>
                    <div className="text-neutral-500">Create a unique tap pattern that can be performed even when your screen is off.</div>
                    <div className="text-xl mt-2">Voice Command</div>
                    <div>Activate Saafe Aura audio</div>
                    <div className="text-neutral-500">Choose a unique phrase that won't be triggered accidentally.</div>
                    <div className='text-xl mt-2'>Emegency Contacts</div>
                    <div className='bg-neutral-900 mt-2 rounded-md opacity-50 p-5'>
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
                    <button className='text-xl block mx-auto bg-neutral-700 w-full p-4 rounded-md'>
                        + Add new guardian
                    </button>
                </div>
                <button className="w-full bg-neutral-300 p-4 text-neutral-700 mt-4 rounded-md font-extrabold">Save SOS settings</button>
                </div>
            </div>
            </div>
            <div className='bg-neutral-800 mx-8 rounded-md p-6 flex flex-col lg:flex-row justify-between'>
                <div>
                    <div className='text-2xl font-extrabold'>Test Your SOS System</div>
                    <div className='text-neutral-600 mt-2 pb-2 lg:pb-0'>Run a simulated emergency to ensure everything works properly.</div>
                </div>
                <button className='bg-neutral-200 text-neutral-800 p-4 lg:px-4 lg:py-0 rounded-md'>Run Test Mode</button>
            </div>
        </div>
    );
}

export default Emergency;
