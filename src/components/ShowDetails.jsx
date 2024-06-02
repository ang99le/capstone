import { useNavigate } from "react-router-dom"; 


function ShowDetails ({setPopUp}){
  const Navigate=useNavigate();
    return(
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
      <div className='bg-white p-10 rounded-md shadow-md h-[650px]'>

      <div class="grid place-items-left">
      <button onClick={()=>setPopUp(false)}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6eqIKPjVO3smnMpCieL6fiPOAbabJsgZgw&s" className="absloute  w-[20px]"></img></button>
      </div>

        <h1 className=' text-sky-900 font-bold text-center text-lg my-4'>Rahma Riad Concert</h1>
       <img className="w-[150px] rounded-xl  mx-auto mb-3" src="https://blog.dubaicityguide.com/site/wp-content/uploads/2022/12/Rahma-Riad.jpg"></img>
        <p className="text-sky-800 text-sm">
        join Rahma Riad concert on Baghdad palm and live the <br/>beautiful vibe with one of the best female artist in the <br/>middle east don’t miss the opportunity and book your<br/> tickets now    
        </p>
        <div className="flex mt-2 gap-3 justify-center items-center h-16 text-sm">
        <p className=" text-sky-800 font-medium leading-2 ">
         16th june
        </p>
        <p className=" text-sky-800 font-medium leading-2">
        7:00 pm
        </p>
        </div>
        <button><iframe className="w-[200px] h-[100px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.0738277012306!2d44.359980675547384!3d33.264559473463756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d561d6f1a171%3A0x6875c0693d809fe4!2sPalms%20Of%20Baghdad!5e0!3m2!1sen!2siq!4v1717356317979!5m2!1sen!2siq"></iframe></button>
       </div>

        </div>
    )
}

export default ShowDetails;