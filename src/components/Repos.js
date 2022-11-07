import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Pagination } from './Pagination'

const Repos = ({results}) => {
    const [reposPerpage,setReposePerpage]=useState(2)
    const [currentPage,setCurrentPage]=useState(1)

    const IndexofLastRepo=currentPage*reposPerpage
    const IndexofFirstRepo=IndexofLastRepo-reposPerpage
    const currentRepo=results.slice(IndexofFirstRepo,IndexofLastRepo)
//pages button function//
    const paginate = (Pagenum) => {
        return setCurrentPage(() => Pagenum);
      };
//next button function//
      const next = () => {
        if(currentPage>=3){
          return
        }
          
        else{
          setCurrentPage(()=>currentPage + 1)
        }
        
        
        
      };
    //   previous button function//
      const prev = () => {
        if (currentPage > 1) {
          setCurrentPage(() => currentPage - 1);
        } else {
          return;
        }
      };
  return (
   <>
   <Helmet>
    <title>Git hub repos</title>
    <meta name='description' content='My git hub repos'></meta>
    <link rel='canonical' href='/repos'></link>
   </Helmet>
   <div className='user-cont'>
    <h1>My repository</h1>
    <div className='main'>
        {currentRepo.map((repo)=>{
            const {name,owner:{id,avatar_url},description,node_id}=repo
            return(
                <div className='submain'>
                    <div className='img-sc'>
                    <img src={avatar_url} alt={id}></img>
                    </div>
                    <div className='list-item'>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <Link to={`/srepo/${node_id}`}>
                            {""}
                            <button className="user-btn">View Repo</button>
                        </Link>
                    </div>
                </div>
            )
        })}
    </div>
    <Pagination
    totalRepos={results.length}
    reposPerpage={reposPerpage}
    paginate={paginate}
    prev={prev}
    next={next}
    />

    </div>
   </>
  )
}

export default Repos
