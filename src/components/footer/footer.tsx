export default function footer(){

    return(
        <div>

        <footer>
            <div className="p-10 bg-gray-800 text-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Company</h4>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4"> Our  services</h4>
                            <ul className="text-gray-200">
                                <li className="pb-4 "><i className="fa fa-chevron-right text-yellow-500"></i><a href="header.tsx" className="hover:text-yellow-500">web design</a></li>
                                <li className="pb-4"> <i className="fa fa-chevron-right text-yellow-500 " ></i><a href="header.tsx" className="hover:text-yellow-500">advertisement</a></li>
                                <li className="pb-4"> <i className="fa fa-chevron-right text-yellow-500" ></i><a href="header.tsx" className="hover:text-yellow-500">digital ani.mations</a></li>
                                <li className="pb-4"> <i className="fa fa-chevron-right text-yellow-500"></i><a href="header.tsx" className="hover:text-yellow-500">internet of things</a></li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">useful links</h4>
                            <ul className="text-gray-200">
                                <li className="pb-4"> <i className="fa fa-chevron-right text-yellow-500"></i><a href="header.tsx" className="hover:text-yellow-500">about us</a></li>
                                <li className="pb-4"> <i className="fa fa-chevron-right text-yellow-500"></i><a href="header.tsx" className="hover:text-yellow-500">services</a></li>
                                <li className="pb-4"> <i className="fa fa-chevron-right text-yellow-500"></i><a href="header.tsx" className="hover:text-yellow-500">our blog</a></li>
                                <li className="pb-4"> <i className="fa fa-chevron-right text-yellow-500"></i><a href="header.tsx" className="hover:text-yellow-500">contact</a></li>
                            </ul>

                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Join our newsletter</h4>
                            <form>
                                <input type="text" name=""></input>
                                <button>Subscribe</button>
                            </form>
                        </div>
                         
 
                    </div>

                </div>

            </div>
            </footer>
        
        
        </div>

        

        
    )
}