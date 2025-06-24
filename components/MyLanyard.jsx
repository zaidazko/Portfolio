import React from 'react'
import Lanyard from '../src/blocks/Components/Lanyard/Lanyard'

const MyLanyard = () => {
  return (
    <div>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  )
}

export default MyLanyard
