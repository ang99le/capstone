import { useNavigate ,Navigate} from "react-router-dom";

const ProgCards= ()=>{
const Navigate=useNavigate();

     const Cards=[
    {
        
        title:"The Old Babylon City",
        description:"1 day trip to Babylon including food and guide ",
        price:"100 IQD",
        Rate:"4.5"
    },
    {
        
        title:"The Old Babylon City",
        description:"1 day trip to Babylon including food and guide ",
        price:"100 IQD",
        Rate:"4.5"
    },
    {
        
        title:"The Old Babylon City",
        description:"1 day trip to Babylon including food and guide ",
        price:"100 IQD",
        Rate:"4.5"
    },
    {
      
      title:"The Old Babylon City",
      description:"1 day trip to Babylon including food and guide ",
      price:"100 IQD",
      Rate:"4.5"
  },
  {
    
    title:"The Old Babylon City",
    description:"1 day trip to Babylon including food and guide ",
    price:"100 IQD",
    Rate:"4.5"
  },
  {
    
    title:"The Old Babylon City",
    description:"1 day trip to Babylon including food and guide ",
    price:"100 IQD",
    Rate:"4.5"
  },
  ]

  return (
    <>
    
    
    {Cards.map((Cards,id)=>(
        <div key={id} class="flex flex-col  justify-center rounded-xl">

	<div class="relative flex flex-col mb-7 md:flex-row md:space-x-5 space-y-1 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div class="w-full md:w-1/3 bg-white grid place-items-center">
			<img src="https://th.bing.com/th/id/R.ff936af40057cc6afab210285b181509?rik=CHE9ALKU7%2bIZ9w&riu=http%3a%2f%2fjustfunfacts.com%2fwp-content%2fuploads%2f2016%2f11%2fbabylon-ishtar-gate.jpg&ehk=F636nFuYgQaBlp7CvHjqesQqdDHjkeVGB%2f5slgEYtMk%3d&risl=&pid=ImgRaw&r=0" alt="tailwind logo" class="rounded-xl" />
    </div>

			<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div class="flex justify-between item-center">

					<p class="text-gray-500 font-medium hidden md:block">Vacations</p>
					<div class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p class="text-sky-800 font-bold text-md ml-1">
							{Cards.Rate}
			
						</p>
					</div>
				
				</div>
				<h3 class="font-black text-sky-800 md:text-3xl text-xl">{Cards.title}</h3>
				<p class="md:text-lg text-sky-600 text-base">{Cards.description}</p>
				<p class="text-xl font-black text-sky-800">
					{Cards.price}
					<span class="font-normal text-sky-600 text-base">/day</span>
				</p>
        <div className="flex gap-4 pt-3">
        <button  className="text-sky-800 font-medium hover:bg-yellow-300 " type="submit" onClick={()=> {Navigate("/Progdetails")}}>Show Details</button>
        <button  className="text-sky-800 font-medium " type="submit" onClick={()=> {Navigate("#/")}}>Book Now</button>
        </div>
      
			</div>
		</div>
	</div>
        ))}
    
    
   
    
    
    
    
    </>
  )

}

export default ProgCards;