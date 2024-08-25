"use client"

import SpeakerCard from './SpeakerCard';
import { speakers } from '@utils/speaker';

import { useState } from 'react'


const EventSpeakers = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="font-inter py-[50px] w-full bg-cover bg-center bg-no-repeat">
          <div className="w-[80%] max-w-[1600px] flex  flex-col mx-auto gap-8 transition-all duration-1000">
              <h2 className="text-[32px] text-center font-bold">Past Speakers</h2>

              <p className='text-[16px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci sequi quibusdam doloribus. Molestiae, nemo!</p>

            <div className='flex justify-center'>
                <div className='grid grid-cols-4  gap-12 justify-center  items-center mt-2'>
                    {
                        speakers.map((speaker, i) => {
                        return ( 
                            i<4 ? 
                            <SpeakerCard speaker={speaker} /> 
                            : 
                            showMore && <SpeakerCard speaker={speaker} /> 
                            )
                        })
                    }
                </div>
            </div>
                    

              <div className='flex justify-center'>
              {
                !showMore ? 
                  <button 
                    className='text-[#15BFFD] border-2 w-fit p-2 px-3 border-[#15BFFD] rounded-full'
                    onClick={() => setShowMore(true)}  
                  >
                    See more
                  </button>
                : ""
              }
              </div>
          </div>
      </div>

    </>
  )
}

export default EventSpeakers