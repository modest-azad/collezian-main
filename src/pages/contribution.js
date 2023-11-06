/* eslint-disable @next/next/no-img-element */
import { Alert, Button, Radio } from "flowbite-react";

export default function Contribute(){
    var input = " rounded-3xl w-full text-sm p-4 my-1"
    return (
        <>
                <div className="text-center m-auto h-full grid grid-cols-1 lg:grid-cols-12  justify-center">
                    <div className="bg-blue-700 md:col-span-6 flex justify-center items-center py-10">
                        <img className="w-[50%]" src="/logo/Collezian_Official_logo_LIGHT.png" alt="logo"/>
                    </div>
                    <div className="form-container md:col-span-6 w-full">
                        <h2 className="text-center font-bold text-3xl my-4 text-blue-900">Upload Files</h2> 

                        <form className="grid gap-2  justify-center px-4 ">
                        <hr/>
                        <p className="text-gray-700 pt-4 font-semibold">Your email*</p>
                        <input className={input} type="email" required name="email" id="tittle" placeholder="example@gmail.com"/>

                        <input className={input} name="link" type="text" placeholder="Paste your file link here"/>
                                                
                        <select className={input} required >
                            <option value="civil">Select branch</option>
                            <option value="civil">Civil Engineering</option>
                            <option value="cse">Computer Science and Engineering</option>
                            <option value="ece">Electronics and Communication Engineering</option>
                            <option value="ee">Electrical Engineering</option>
                            <option value="eee">Elecrical and Electronics Engineering</option>
                            <option value="me">Mechanical Engineering</option>
                        </select>

                        <p className="text-gray-700 pt-4 font-semibold">Add Tittle</p>
                        <input className={input} type="text"  required name="tittle" id="tittle" placeholder="ex-DBMS, Digital Signal Notes"/>

                        <p className="text-gray-700 pt-4 font-semibold">Add Description</p>
                        <textarea className="rounded-xl w-full text-sm max-h-20" required type="text-area" name="description" id="description" placeholder="Add description" />

                        <button onClick={()=>{
                            window.alert("Uploading...")
                        }} className="  bg-blue-500 hover:bg-blue-700 text-white font-bold mx-10 my-4 py-4 px-4 rounded-3xl">Upload</button>
                        </form>
                    </div>
                    
                </div>
        </>
    )
}