"use client"

import EventCard from './EventCard'
import {events} from '../utils/events'
import EventPopUp from './EventPopUp'

import { useState } from 'react'


const EventSubEvents = () => {
  const [showMore, setShowMore] = useState(false);
  const [event, setEvent] = useState({name: '', desc: '', link: '', image: ''});
  const [showEvent, setShowEvent] = useState(false);

  const showEventDetails = (event) => {
      setEvent(event);
      setShowEvent(true);
  }

  return (
    <>
      <div className="font-inter py-[50px] w-full bg-cover bg-center bg-no-repeat">
          <div className="w-[80%] max-w-[1600px] flex flex-col mx-auto gap-8 transition-all duration-1000">
              <h2 className="text-[32px] text-center font-bold">Events Under Event Name</h2>

              <p className='text-[16px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci sequi quibusdam doloribus. Molestiae, nemo!</p>

              <div className='flex justify-center'>
              <div className='grid grid-cols-3 gap-12 justify-center items-center mt-2'>
                  {
                    events.map((event, i) => {
                      return ( 
                        i<3 ? 
                          <EventCard showEventDetails={showEventDetails} event={event} /> 
                        : 
                          showMore && <EventCard showEventDetails={showEventDetails} event={event} />
                        )
                    })
                  }
              </div>

              </div>

              <div className='flex justify-center'>
              {
                (!showMore && events.length > 3) ? 
                  <button 
                    className='text-[#15BFFD] border-2 w-fit p-2 px-3 border-[#15BFFD] rounded-full'
                    onClick={() => setShowMore(true)}  
                  >
                    See more
                  </button>
                : ""
              }
              </div>

      {showEvent && <EventPopUp event={event} showEvent={showEvent} setShowEvent={setShowEvent} />}
          </div>
      </div>

    </>
  )
}

export default EventSubEvents