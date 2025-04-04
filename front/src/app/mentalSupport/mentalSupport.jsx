import { MessageCircleMore } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';
function MentalSupport(){
    return(
        
        <div className="bg-gradient-to-b from-neutral-900 to-black text-white min-h-screen py-10">
            <div className="mx-6 mt-8">
                <div className="w-full min-h-screen bg-neutral-800 rounded-md flex flex-col border-2 border-neutral-300/30 ">

                    <div className="flex bg-red-300 opacity-50 rounded-t-md text-neutral-800 items-center space-x-4 p-4">
                        <div className='bg-red-200 p-4 rounded-full'>
                            <MessageCircleMore />
                        </div>
                        <div>
                            <div className='text-xl font-extrabold'>SafeAura Support Assistant</div>
                            <div className='text-neutral-700'>AI-powered emotional companion</div>
                        </div>
                    </div>

                    <div className='flex-1 overflow-y-auto'>
                        
                    </div>

                    <div className='flex bg-neutral-700 '>
                        <input type="text" className='w-full p-4' placeholder="Type Your Message" />
                        <SendHorizontal className='m-4'/>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MentalSupport ;