import support from '../../../../assets/support.png';
import { BiSolidUser, BiSolidMessageAltDetail } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const OurSupport = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-20'>
            <div>
                <img src={support} alt="" />
            </div>
            <div className='w-full lg:w-[50%]'>
                <h1 className='text-3xl font-bold mb-8 ml-10 md:ml-20 lg:ml-0'>Contuct Us</h1>

                <form>
                    <div className='w-[80%] mx-auto lg:mx-0 lg:w-[60%] relative text-gray-500'>
                    <input className='border-b-2 border-black w-full px-10 text-lg outline-none' type="text" placeholder='Full Name' />
                        <BiSolidUser className='absolute -top-0 left-2 text-2xl' />
                    </div>
                    <div className='w-[80%] mx-auto lg:mx-0 lg:w-[60%] relative my-10 text-gray-500'>
                    <input className='border-b-2 border-black w-full px-10 text-lg outline-none' type="email" placeholder='Email Address' />
                        <MdEmail className='absolute -top-0 left-2 text-2xl' />
                    </div>
                    <div className='w-[80%] mx-auto lg:mx-0 lg:w-[60%] relative text-gray-500'>
                    <input className='border-b-2 border-black w-full px-10 text-lg outline-none' type="text" placeholder='Write your message' />
                        <BiSolidMessageAltDetail className='absolute -top-0 left-2 text-2xl' />
                    </div>
                    <input className='bg-slate-700 mt-6 px-4 py-2 rounded-md text-lg font-semibold text-white ml-10 md:ml-20 lg:ml-0' type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    );
};

export default OurSupport;