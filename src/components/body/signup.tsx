export default function signup(){

    return(
        <div>

        <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">Create your account </h2>
        <form className="space-y-4">
            <div>
                <label className="block mb-1 font-bold">Name</label> 
                <input type="text" className="outline-none focus:border-blue-400 w-full border border-gray-400 p-2 rounded"></input>
            </div>

            <div>
                <label className="block mb-1 font-bold">Email</label>
                <input type="email" className="w-full border border-gray-400 p-2 rounded"></input>
            </div>
            <div>
                <label className="block mb-2 font-bold">Password</label>
                <input type="password" className="w-full border border-gray-400 p-2 rounded"></input>
            </div>

            <div>
                <label className="block mb-2 font-bold">Comfirm Password</label>
                <input type="password" className="w-full border border-gray-400 p-2 rounded"></input>
            </div>
            <div>
                <label htmlFor="agree font-bold" >Agree terms and conditions</label>
                <input type="checkbox" id="agree" ></input>
            </div>
        </form>
        </div>
        </div>

        </div>

        
    )
}