import React from "react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
export const Pagination=({totalRepos,reposPerpage,next,prev,paginate})=>{
    const Pagenumbers=[]
    for(let i=1;i<Math.ceil(totalRepos/reposPerpage);i++){
        Pagenumbers.push(i)
    }
    console.log(Pagenumbers.length)
    return(
        <>
        <div className='page-main'>
        <ul>
            <a onClick={()=>prev()}> <FaArrowLeft/> </a>
            {Pagenumbers.map((number)=>{
                return (
                    <>
                    <a onClick={()=>paginate(number)} >{number}</a>
                    </>
                )
            })}


            <a onClick={()=>next()}> <FaArrowRight/> </a>
        </ul>
    </div>
       
        </>
    )


}