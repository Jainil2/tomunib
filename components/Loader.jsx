import React from 'react'
import ReactLoading from "react-loading";
import Footer from './Footer/footer';

const Loader =() =>{
	return (
		<div className='flex justify-center items-center  py-40 mt-10'>
			
			
			
			<ReactLoading
				type="spinningBubbles"
				color="#0000FF"
				height={100}
				width={50}
                
			/>
              
		</div>
      
	);
}


export default Loader