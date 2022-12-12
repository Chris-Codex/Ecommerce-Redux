import { nextSlide, prevSlide, dotSlide } from '../../features/sliderSlice/SliderSlice'
import { useSelector, useDispatch } from "react-redux"
import { data } from './../../assets/data/data';




const Slider = () => {
    const sliderIndex = useSelector((state) => state.slider.value)
    const dispatch = useDispatch()

    
  return (
    <div className='relative p-4'>
        <div>
            {data.map((list) => {
                return (
                  <div  key={list.id} className={parseInt(list.id) === sliderIndex ? "opacity-100 duration-700 ease-in-out scale-100" : "opacity-0 duration-700 ease-in-out scale-95"}>
                    <div>
                      {parseInt(list.id) === sliderIndex && (
                        <img src={list.img} alt="shoes" className='w-full h-[750px]' />
                      )}
                    </div>
                    <div className='absolute top-44 mx-auto inset-x-1/4'>
                        <p className='text-white text-4xl font-inter font-bold tracking-normal leading-none'>
                            {parseInt(list.id) === sliderIndex && list.text}
                        </p>
                    </div>
                  </div>
                )
            })}
        </div>
        <div className='flex absolute bottom-12 left-[45%]'>
           {data.map((dot, index) => {
             return (
                <div className="mr-4" key={dot.id}>
                    <div className={index === sliderIndex ? 'bg-green-300 rounded-full p-4 cursor-pointer' : 'bg-orange-50 rounded-full p-4 cursor-pointer'} onClick={() => dispatch(dotSlide(index))}>

                     </div>
                </div>
             )
           })}
        </div>
        <button className="mr-3 absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300" onClick={() => dispatch(nextSlide(sliderIndex + 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
           </svg>
        </button>
        <button className="ml-3 absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300" onClick={() => dispatch(prevSlide(sliderIndex - 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
    </div>
  )
}

export default Slider