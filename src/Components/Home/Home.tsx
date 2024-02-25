import {useState, useEffect} from 'react'
import '../Style/Home.css'
import AddPost from './AddPost'

const url = "http://localhost:3000/news";

            
const Home =  ()=>{

    // aplicar a logica para listar todas as postagens


    return(
        <div className='body'>

            <div className='container-one'>

                <div className='posts'>
                    <h2 className='title-post'>brasil ganha mundial de lol</h2>
                    <span className='content-post'>pain gaming e o melhor time do lol do mundo</span> 
                </div>

            </div>

            <div className='container-two'>
                <AddPost/>
            </div>

            
        </div>
    )


}

export default Home