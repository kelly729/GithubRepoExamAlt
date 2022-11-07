import React from 'react'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";


export const RepoPagination = ({totalRepos,reposPerPage,paginate,prev,next}) => {
    const Pagenum=[]
    for(let i=1;i<=Math.ceil(totalRepos/reposPerPage);i++){
        Pagenum.push(i)
    }
    // const key=k
    // console.log(Pagenum)
  return (
    <div className='page-main'>
        <ul>
            <a onClick={()=>prev()}><FaArrowLeft/></a>
            {Pagenum.map((number)=>{
                console.log(number)
                return(
                    <>
                    <a>{number}</a>
                    </>
                )
            })}
            <a onClick={()=>next()}><FaArrowRight/></a>
        </ul>
        
      
    </div>
  )
}


