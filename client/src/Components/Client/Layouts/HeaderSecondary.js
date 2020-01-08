import React from 'react'
import pic from '../../../assets/what-is-blockchain-the-technology-explained.jpg'

export default function HeaderSecondary() {
    var bg='https://www.themashabrand.com/scripts/Voting/source/admin/uploads/157121554052709.jpg&#39) no-repeat center center fixed'
    return (
       
        <div> 
            
             <header className="header-login top-page" style={{
            background: 'url('+ pic +')',
            backgroundize: 'cover',
            backgroundPosition: 'center center',
            WebkitBackgroundSize: 'cover',
            // -moz-background-size: cover;
                //-o-background-size: cover;
            color: '#fff',
            height: '30vh',
            width: '100%',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
    }}

>
    <div className="container">
     <div className="content">
      <div className="row">
       <h1 className="revealOnScroll" data-animation="fadeInDown"> Voting</h1>
      </div>
     </div>
    </div>
   </header>
        </div>
    )
    
}
