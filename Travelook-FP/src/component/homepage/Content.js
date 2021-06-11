import React from 'react'
import './Content.css'

function Content() {
    return (
      <div className="cobawarna">
      <div className="container">
          <div className="text-1">TRAVELOOK, YOUR WAY!</div>
          <div className="group-box1">
            <div className="frame-1">
              <h1 className="text-2" style={{marginTop:90}}>
                It’s easy to book <br />
                house for rent
              </h1>
              <p className="text-3 nunito-regular-normal-eerie-black-16px">
                Booking house easily and quickly. No need to worry, with just one touch of a finger, the house you need can
                be obtained easily.
              </p>
              
            </div>
            <img
              className="rectangle"
              src="/images/pict3.png"
            />
          </div>
          <div className="group-box2">
                      <p><img src="/images/pict2.png" style={{marginRight: 40}}/>
                      <h1 style={{marginTop:90}}>
                Unique <br />
                home design
              </h1>
                      Each Travelook home is unique, thoughtfully designed, and equipped with a standard set of amenities – whether you 
                      stay in a private room for rent or the entire space for your own use.
                          </p>
            </div>
          {/* <div className="group-box2">
            <div className="frame-2">
              <h1 className="text-2">
                Unique <br />
                home design
              </h1>
              <p className="text-2 nunito-regular-normal-eerie-black-16px">
              <img
              src="/images/pict2.png"
            />
              Each Travelook home is unique, thoughtfully designed, and equipped with a standard set of amenities – whether you 
              stay in a private room for rent or the entire space for your own use.
              </p>
            </div>
          </div> */}
          <div className="group-box3">
            <div className="frame-1">
              <h2 className="text-2" style={{marginTop:120}}>
              Host are wonderful. <br />
              Verified for quality.
              </h2>
              <p className="text-3 nunito-regular-normal-eerie-black-16px">
              Travelook is a handpicker collection of the highest quality homes 
              with hosts known foe their great reviews and attention to detail.
              </p>
            </div>
            <img
              className="rectangle"
              src="/images/pict1.png"
            />
          </div>
      </div>
      </div>
    )
}

export default Content
