"use client"

import { useEffect, useReducer, useRef, useState } from "react"

import { increaseNumberAnimation } from "../utils/numberCounter"
import Counter from "@utils/Counter"
import milkyway from "../public/assets/icons/milky-way.svg"

const Community = () => {
  

  return (
    <section className="bg-[url('/assets/images/noise-2.png')] w-full bg-[length:120%] bg-center bg-no-repeat">
        <div className="font-inter py-[50px] pb-[120px] bg-[url('/assets/icons/milky-way.svg')] w-full bg-cover bg-center bg-no-repeat">
            <div className="w-[80%] max-w-[1600px] flex flex-col mx-auto gap-6">

                <h1 className="text-white text-[64px] text-center">Our Community</h1>

                <div className="flex justify-between gap-4">
                    <div>
                        <div className="gradient-text">
                            <Counter endVal={3000} incVal={20} speed={80}  />
                        </div>
                        <p className="text-[16px] text-white uppercase">Instagram Followers</p>
                    </div>
                    <div>
                        <div className="gradient-text">
                            <Counter endVal={30} incVal={1} speed={80}  />
                        </div>
                        <p className="text-[16px] text-white uppercase">Startups</p>
                    </div>
                    <div>
                        <div className="gradient-text">
                            <Counter endVal={100000} incVal={100} speed={50}  />
                        </div>
                        <p className="text-[16px] text-white uppercase">Cash Prize through the years</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Community