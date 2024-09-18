
import Adam from './components/imgs/adamjpg.jpg';
import Kent from './components/imgs/ssssjpg.jpg';
import Marchel from './components/imgs/marcheljpg.jpg';
const Athour = () => {
  return (
    <section>
        <div className="container mx-auto px-5 text-center my-36">
        <h2 className="font-bold text-4xl">"Best Practices" don't actually worl.</h2>
        <p className='mt-8 max-w-5xl mx-auto'>I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>

            <div className=" mt-10 flex flex-col space-x-0 space-y-5 md:space-y-0 md:space-x-5 md:flex-row ">
            
            <div className="md:w-1/3 flex flex-col items-center p-6 space-y-3 border border-slate-500 hover:bg-slate-200 rounded-lg bg-slate-100">
                <img src={Adam} alt="adam" className='w-20 rounded-full -mt-14'/>
                <h5 className='font-bold text-lg text-slate-900'>Adam Wathan</h5>
                <p className='leading-6 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolore voluptate natus doloribus blanditiis, facere cupiditate molestiae animi distinctio beatae!</p>
            </div>

            <div className="md:w-1/3 flex flex-col items-center p-6 space-y-3 border border-slate-500 hover:bg-slate-200 rounded-lg bg-slate-100">
                <img src={Kent} alt="adam" className='w-20 rounded-full -mt-14'/>
                <h5 className='font-bold text-lg text-slate-900'>Kent C. Dodds</h5>
                <p className='leading-6 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolore voluptate natus doloribus blanditiis, facere cupiditate molestiae animi distinctio beatae!</p>
            </div>

            
            <div className="md:w-1/3 flex flex-col items-center p-6 space-y-3 border border-slate-500 hover:bg-slate-200 rounded-lg bg-slate-100">
                <img src={Marchel} alt="adam" className='w-20 rounded-full -mt-14'/>
                <h5 className='font-bold text-lg text-slate-900'>Marchel Pociot</h5>
                <p className='leading-6 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolore voluptate natus doloribus blanditiis, facere cupiditate molestiae animi distinctio beatae!</p>
            </div>
            
            </div>
        </div>
    </section>
  )
}

export default Athour