import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className='bg-dark fixed-bottom text-white pt-1  '>
            <div className='container '>
                <ul className='d-flex justify-content-center'>
                  <div className='d-flex align-items-center pr-4'>Follow us on</div>
                  <li><i class="fa fa-twitter" aria-hidden="true" ></i></li>
                  <li><i class="fa fa-instagram" aria-hidden="true" ></i></li>
                  <li><i class="fa fa-github" aria-hidden="true" ></i></li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
