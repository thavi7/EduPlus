import React, { useEffect, useRef } from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'

const Applayout = () => {

  const scrollRef = useRef(null)

  useEffect(() => {
    const loco = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08
    })

    return () => loco.destroy()
  }, [])

  return (
    <div >

      <Sidebar />

      <div
        ref={scrollRef}
        data-scroll-container
        className="ml-[20%] "
      >
        <div data-scroll-section>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Applayout