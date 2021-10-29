import React from 'react'
import {Collapse} from '@mui/material'

interface Props{
  isOpen: boolean
}

function FilterCollapse({isOpen}: Props) {
  return (
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <p>hej</p>
    </Collapse>
  )
}

export default FilterCollapse;
