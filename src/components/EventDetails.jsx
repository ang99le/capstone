function EventDetails ({setBooking}){

return(
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>

      <div className='bg-white p-10 rounded-md shadow-md'>
      <button onClick={()=>setBooking(false)}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6eqIKPjVO3smnMpCieL6fiPOAbabJsgZgw&s" className="absloute w-[20px]"></img></button>

        <h1 className=' text-sky-900 font-bold text-center text-lg my-5'>Rahma Riad Concert</h1>
        
       <img className="w-[220px] rounded-xl  mx-auto mb-3" src="https://blog.dubaicityguide.com/site/wp-content/uploads/2022/12/Rahma-Riad.jpg"></img>
        <p className="text-sky-800">
        join Rahma Riad concert on Baghdad palm and live the <br/>beautiful vibe with one of the best female artist in the <br/>middle east don’t miss the opportunity and book your<br/> tickets now    
        </p>
        <div className="flex mt-3 gap-3 justify-center items-center h-16">
        <p className=" text-sky-800 font-medium leading-2 ">
         16th june
        </p>
        <p className=" text-sky-800 font-medium leading-2">
        7:00 pm
        </p>
        </div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800">Book Now</button>
    
       </div>

        </div>
    )
}


export default EventDetails;