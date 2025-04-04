import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="bg-gradient-to-b from-neutral-900 to-black text-white flex flex-col min-h-screen items-center p-8 my-12">
            <div className="flex flex-col items-center">
                <div className="text-red-300 text-3xl font-extrabold p-2">SafeAura</div>
                <div className="text-2xl p-2">Sign in to SafeAura</div>
                <div className="bg-neutral-800 p-4 m-2 border-1 border-neutral-700 rounded-md">
                    <div>
                        <label htmlFor="UserName">Username or email address</label>
                        <input type="text" className="w-full bg-neutral-900 my-2 rounded-md p-1 border-1 border-neutral-700"/>
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <label htmlFor="Password">Password</label>
                            <Link className="text-blue-400">Forgot Password ?</Link>
                        </div>
                        <input type="text" name="" id="" className="w-full bg-neutral-900 my-2 rounded-md p-1 border-1 border-neutral-700" />
                    </div>

                    <button className="bg-green-600 w-full p-2 mt-4 rounded-md">Sign in</button>
                </div>
                <div>New to SafeAura ? <Link className="text-blue-400" >Create an account</Link></div>
            </div>
        </div>
    )
}
export default Login ;