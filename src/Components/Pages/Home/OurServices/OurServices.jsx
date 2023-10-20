import { FaShippingFast } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import { MdOutlineAssignmentReturn } from 'react-icons/md';

const OurServices = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-evenly gap-10'>
            <div className='text-center w-72 mx-auto lg:mx-0 bg-slate-50 py-5 rounded-lg'>
                <FaShippingFast className='text-4xl mx-auto' />
                <h1 className='text-2xl my-5 font-bold uppercase'>Free Shipping</h1>
                <p className='text-gray-500 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis</p>
            </div>
            <div className='text-center w-72 mx-auto lg:mx-0 bg-slate-50 py-5 rounded-lg'>
                <BiSolidLike className='text-4xl mx-auto' />
                <h1 className='text-2xl my-5 font-bold uppercase'>100% Satisfaction</h1>
                <p className='text-gray-500 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis</p>
            </div>
            <div className='text-center w-72 mx-auto lg:mx-0 bg-slate-50 py-5 rounded-lg'>
                <MdOutlineAssignmentReturn className='text-4xl mx-auto' />
                <h1 className='text-2xl my-5 font-bold uppercase'>Easy Return</h1>
                <p className='text-gray-500 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis</p>
            </div>
        </div>
    );
};

export default OurServices;