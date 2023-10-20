import emailImage from '../../../assets/email.png';

const EmailVerificationBanner = () => {
    return (
        <div className='lg:bg-gradient-to-r from-sky-400 via-sky-100 to-white flex flex-col lg:flex-row justify-between items-center rounded-xl'>
            <div className='px-5 lg:pl-20'>
                <h1 className='text-3xl font-bold'>You need to verify your emai</h1>
                <p className='text-lg font-medium my-5'>Verify your email for added account security and to stay updated on tech deals and order status. Look for our confirmation email and click the link to get started.</p>

                <div className='lg:w-[50%] relative'>
                    <input className='px-5 py-3 rounded-full w-full bg-slate-100 ' type="email" placeholder='Enater your email address' />
                    <button className='px-5 py-3 rounded-r-full bg-slate-700 text-white absolute right-0'>Send</button>
                </div>
            </div>
            <div>
                <img src={emailImage} alt="" />
            </div>
        </div>
    );
};

export default EmailVerificationBanner;