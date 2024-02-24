import React from 'react'
import TopHeader from '../_components/TopHeader'

const layout = ({children}) => {
  return (
    <div>
      <div>
        <TopHeader/>
        {children}
      </div>
    </div>
  )
}

export default layout