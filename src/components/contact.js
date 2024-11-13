import React from 'react'
// import { AiOutlineX,AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
    // export default function Contact() {
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          // setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "079c8bba-dc54-4e26-8a59-555bce7cce3b");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            alert("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
      
        return (
          <div>
            <div className='flex flex-col justify-center bg-contact p-10'>
              <div className='flex justify-center'>
              <h1 className='text-4xl  mb-5 w-[150px] font-bold gray'>Contact</h1>

              </div>

            
            <div className='flex justify-center'>
            <p className='text-white px-14'> if  you want to discuss more in details , please ccontact me </p>

            </div>
            
            </div>
            <section className='flex flex-col md:flex-row bg-contact  py-16' id='contact'>
            <div className=' w-full md:w-1/2 flex flex-col pb-6 md:pb-0 md:pl-0 pl- items-center text-white'>
                {/* <h1 className='text-4xl text-black border-b-4 border-[#A570B4] mb-5 w-[130px] font-bold'>Contact</h1> */}
                {/* <p className='text-black pb-5'> if  you want to discuss more in details , please ccontact me </p> */}
                <div className=''>
                      <p className='py-2 text-xl '><i class="fa-solid fa-envelope px-2" ></i>rajkumarraj072001@gmail.com</p>
                      <p className='PY-2 text-xl'><i class="fa-solid fa-phone-volume px-2"></i> +91 7708002908</p>
                      <p className='py-2 text-xl'><i class="fa-solid fa-location-dot px-2"></i> Chennai</p>
                </div>
                <div className='flex relative right-20 top-1  '>
                   <a href="https://x.com/Rajkuma62889479" className='pr-5 text-white hover:text-blue-500'><i class="fa-brands fa-x-twitter text-3xl" ></i></a>
                    <a href="https://github.com/RajkumarRamachandiran" className='pr-5  text-white hover:text-blue-500'><i class="fa-brands fa-github text-3xl"></i></a>
                    <a href="https://www.linkedin.com/in/rajkumar2207/" className=' text-white hover:text-blue-500'><i class="fa-brands fa-linkedin text-3xl"></i></a>
                 </div>
                </div>
                <div className='w-1/2 px-3 py-10'>
                    <form onSubmit={onSubmit} className=''>
                        {/* <label className='font-bold text-2xl'>Your name</label><br/> */}
                        <input  className='w-[335px] h-[40px] rounded p-3 outline-none ' type="text" placeholder='Name' name='name'/>
                        <br/>
                        {/* <label   className='font-bold text-2xl'>Gmail</label><br/> */}
                        <br/>
                        <input  type="email" placeholder=' Email' name='Gmail'  className='w-[335px] h-[40px] rounded p-3 outline-none'/><br/>
                        <br/>
                        {/* <label className='font-bold text-2xl' >Phone no</label><br/> */}
                        <input type="tel" name='Phone no' placeholder=' Phone no' required   className='w-[335px] h-[40px] rounded p-3  outline-none'/><br/>
                        <br/>
                        <textarea  className=" w-[335px] p-3 outline-none rounded "name="message" id="" rows="6" placeholder='Enter your message'></textarea>
                        <br/>
                        <button type="submit" className='btn'>Submit</button>
                    </form>

                </div>
                
       </section>
      
          </div>
        )
}

export default Contact