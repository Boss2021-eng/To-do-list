import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Work({taskName}) {

  

  return (
        <p c>{taskName} <span>
        <FontAwesomeIcon className='faicons' icon='trash' />
      </span> </p>
        
  );
}

