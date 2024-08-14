import React from 'react'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer-row'>
          <div className='footer-text'>
            For a better experience and access to virtual challenges,
            download the Decathlon Play app now
          </div>
          <div className='footer-images'>
            <img src='\images\footerimages\footer1.png' alt='f1' width={150} />
            <img src='\images\footerimages\footer2.png' alt='f1' width={135} />
          </div>
        </div>

        <div className='footer-links-container'>
          <h6><span style={{color:'#3643BA'}}>PICK YOUR FAVOURITE SPORTS</span></h6>
           <div class="grid-container">
            <div class="item1"><a href='/#'>BADMINTON</a></div>
            <div class="item2"><a href='/#'>BASKETBALL</a></div>
            <div class="item3"><a href='/#'>CRICKET</a></div>  
            <div class="item4"><a href='/#'>CROSS TRAINING</a></div>
            <div class="item5"><a href='/#'>CYCLING</a></div>
            <div class="item6"><a href='/#'>DANCE</a></div>
            <div class="item7"><a href='/#'>FITNESS CARDIO</a></div>
            <div class="item8"><a href='/#'>FOOTBALL</a></div>
            <div class="item9"><a href='/#'>KARATE</a></div>
            <div class="item10"><a href='/#'>RUNNING</a></div>
            <div class="item11"><a href='/#'>SKATING</a></div>
            <div class="item12"><a href='/#'>SKATEBOARDING</a></div>
            <div class="item13"><a href='/#'>TABLE TENNIS</a></div>
            <div class="item14"><a href='/#'>TENNIS</a></div>
            <div class="item15"><a href='/#'>YOGA</a></div>
            <div class="item16"><a href='/#'>ZUMBA</a></div>
            </div>
        </div>

        <div className='footer-featured-categories'>
          <hr />
          <h5><span style={{color:'#3643BA'}}>Featured Categories</span></h5>
          <div className='footer-categories-row'>
            <div className='footer-category-column'>
              <p><a href='/#'>RUNNING EVENTS</a></p>
              <p><a href='/#'>MULTI-SPORT PLAYGROUND</a></p>
              <p><a href='/#'>SKATING COACHING</a></p>
              <p><a href='/#'>WALKING CHALLENGES</a></p>
            </div>
            <div className='footer-category-column'>
              <p><a href='/#'>YOGA EVENTS</a></p>
              <p><a href='/#'>CRICKET GROUNDS</a></p>
              <p><a href='/#'>KARATE COACHING</a></p>
              <p><a href='/#'>RUNNING CHALLENGES</a></p>
            </div>
            <div className='footer-category-column'>
              <p><a href='/#'>CYCLING EVENTS</a></p>
              <p><a href='/#'>BASKETBALL COURT</a></p>
              <p><a href='/#'>BASKETBALL COACHING</a></p>
              <p><a href='/#'>CYCLING CHALLENGES</a></p>
            </div>
            <div className='footer-category-column'>
              <p><a href='/#'>BADMINTON EVENTS</a></p>
              <p><a href='/#'>FOOTBALL TURF</a></p>
              <p><a href='/#'>TENNIS COACHING</a></p>
            </div>
            <div className='footer-decathlon-play'>
              <h5><span style={{color:'#3643BA'}}>Decathlon Play</span></h5>
              <div className='footer-decathlon-play-links'>
                <div>
                  <p><a href='/#'>EVENTS</a></p>
                  <p><a href='/#'>COACHING</a></p>
                  <p><a href='/#'>PLAYGROUNDS</a></p>
                  <p><a href='/#'>CHALLENGES</a></p>
                </div>
                <div>
                  <p><a href='/#'>BE A PARTNER</a></p>
                  <p><a href='/#'>READ OUR BLOG</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-contact'>
          <hr />
          <div className='footer-contact-row'>
            <div className='footer-contact-info'>
              <img src='\images\footerimages\footer3.svg' alt='' />
              <h5><span style={{color:'#3643BA'}}>GOT QUESTIONS? WE CAN HELP!</span></h5>
              <div className='footer-button'>
              <button>FAQS</button>
              <button>CONNECT WITH US</button>
              </div>
              <div className='footer-social-media'>
              <h5><span style={{color:'#3643BA'}}>Stay Connected</span></h5>
               <div className=''>
              <img src='\images\footerimages\footer4.svg' alt='' width={30} />
              <img src='\images\footerimages\footer5.svg' alt='' width={30} />
              </div>
            </div>
            </div>         
          </div>
        </div>
    </div>

    <div className='container footer-quote'>
          <i>“DECATHLON PLAY" stands for accessibility for the many and not the few. We want to create an ecosystem that encourages a culture of sports in our community. Easy interactions and support from partners, coaches and players and advice guides to help you as you go.</i>
        </div>

        <div className='footer-links-bottom'>
          <p><a href='/#'>TERMS & CONDITIONS</a></p>
          <p><a href='/#'>PRIVACY POLICY</a></p>
        </div>

        <div className='footer-purpose'>
        <div className='footer-purpose-heading'>
          <h2>OUR PURPOSE</h2>
          </div>
          <h4>“To Inspire 1,500,000,000 Indians to Play Sport”</h4>
          <div className='footer-purpose-img'>
          <img src='\images\footerimages\footer6.svg' alt='' width={800} />
          </div>
          <p>© 2024 Decathlon Sports India Pvt Ltd. All rights reserved.</p>
        </div>    
    </>
    
  )
}

export default Footer;