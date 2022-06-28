import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
//import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
           <a href="https://github.com/German-Valencia" target="_blank" rel='noopener noreferrer'><BsGithub/></a> 
        </div>
      {/*   <div>
            <FaFacebookF/>
        </div> */}
        <div>
        <a href="https://www.linkedin.com/in/germ%C3%A1n-alberto-valencia-torres/" target="_blank" rel='noopener noreferrer'><BsLinkedin/></a>   
        </div>
    </div>
  )
}

export default SocialMedia