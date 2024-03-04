import spotify_logo from "../assets/images/spirit-airlines2866.jpg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextwithHover";
import TextInput from "../components/shared/TextInput";
import { Cloudinary } from "cloudinary-core";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import {useNavigate} from "react-router-dom";








          
            
          



const UploadSong = () =>{

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [track, setTrack] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();


    const submitSong = async()=>{
        // console.log(name);
        // console.log(thumbnail);
        // console.log(track);

        const data = {name, thumbnail, track};
        const response = await makeAuthenticatedPOSTRequest("/song/create", data);
        console.log(response);
        if(response.err){
            alert("Could not create song")
            return;
        }
        alert("Success")
        navigate("/home")

    }

    

    return (
        <div className="h-full w-full flex " >
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10" >
            <div>
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="Spotify Logo" width={125} className="rounded-full" />
                </div>
                <div className="py-5">
                    <IconText 
                        iconName={"material-symbols:home"} 
                        displayText={"Home"}
                        active                        />
                    <IconText 
                        iconName={"material-symbols:search-rounded"} displayText={"Search"}/>
                    <IconText 
                        iconName={"icomoon-free:books"} 
                        displayText={"Your Library"}/>
                    <IconText 
                        iconName={"material-symbols:library-music-sharp"} 
                        displayText={"My Music"}/>
                </div>

                <div className="pt-5" >

                    <IconText 
                        iconName={"material-symbols:add-box"} 
                        displayText={"Create Playlist"}/>
                    <IconText 
                        iconName={"mdi:cards-heart"} 
                        displayText={"Liked Songs"}/>

                </div>
            </div>





            <div className="text-gray-500  text-xs  ">
                <div className="">
                <div className="flex ">
                    <div className="p-1 pb-3 pr-2 pl-3 cursor-pointer hover:text-white">Legal</div>
                    <div className="p-1 pb-3 pr-2 cursor-pointer hover:text-white">Privacy Center</div>
                    <div className="p-1 pb-3 cursor-pointer hover:text-white">Privacy Policy</div>
                </div>
                <div className="flex">
                    <div className="p-1 pb-3 pr-2 pl-3 cursor-pointer hover:text-white">Cookies</div>
                    <div className="p-1 pb-3 pr-2 cursor-pointer hover:text-white">About Ads</div>
                </div>
                <div className="flex">
                    <div className="p-1 pb-3 pl-3 cursor-pointer hover:text-white">Cookies</div>
                </div>
                </div>
            </div>


            

                <div className="p-5">
                    <div className="border border-gray-200 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer" >
                        <Icon icon="carbon:earth-europe-africa" />
                        <div className="ml-2 text-sm font-semibold">
                            English
                        </div>
                    </div>
                </div>


                
                
            </div>

            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">

                <div className="w-1/2 flex h-full">

                    <div className="w-2/3 flex justify-around items-center">
                    <TextWithHover displayText={"Premium"}/>
                    <TextWithHover displayText={"Support"}/>
                    <TextWithHover displayText={"Download"}/>
                    <div className="h-1/2 border-r border-white"></div>
                    </div>

                    <div className="w-1/3 flex justify-around h-full items-center ">
                    <TextWithHover displayText={"Upload Song"}/>

                    <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                        RD
                    </div>

                </div>

                </div>

                </div>
                <div className="content p-8 pt-0 overflow-auto">
                <div className="text-2xl font-semibold mb-5 text-white mt-8">Upload Your Music</div>
                <div className="w-2/3 flex space-x-3">
                    
                        <div className="w-1/2">
                            <TextInput 
                            label="Name" 
                            labelClassName={"text-white"} 
                            placeholder={"Name"}
                            value={name}
                            setValue={setName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInput 
                            label={"Thumbnail"} 
                            labelClassName={"text-white"} 
                            placeholder={"Thumbnail"}
                            value={thumbnail}
                            setValue={setThumbnail}
                            />
                        </div>

                
                </div>

                        <div className="py-5">
                        {   
                            uploadedSongFileName?
                                <div className="bg-white rounded-full p-3 w-1/3">{uploadedSongFileName.substring(0, 35)}...</div>
                            :
                            <CloudinaryUpload  
                            setUrl={setTrack} setName={setUploadedSongFileName} />
                        }
                        </div>

                        <div className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold " onClick={submitSong}>
                            Submit Song
                        </div>
                
                
                    

                </div>
            </div>

            

        </div>
    )
}






export default UploadSong;