
import React,{useState} from 'react'
import { toast } from 'react-toastify';
import {S_wrapIteam} from './S_todo'
import{RiDeleteBin6Line}from 'react-icons/ri';
const Iteam_todo = ({iteam,handelChecked,handelDelete}) => {
  return (
    <S_wrapIteam className='wrapIteam' >
        <div className="left" style={{opacity :iteam.completed && 0.3}}>
            <input type="checkbox" name="checkbox" onChange={(e)=>(handelChecked(iteam.id))} />
            
            <span style={{textDecorationLine : iteam.completed && 'line-through' } }>
              <input type="text" value={iteam.name} />
              {iteam.name}
            </span>
        </div>
        <div className="righ">
                <RiDeleteBin6Line fontSize='22px' onClick={()=>(handelDelete(iteam.id))} 
                  style = {{opacity :iteam.completed===false && 0.3}}
                />
        </div>
    </S_wrapIteam>
  )
}

export default Iteam_todo