import React from 'react'
import './NovelCard.css'

function NovelCard({data}) {
  return (
    <section>
      <div id='card'>
        <div className='card'>
            <img src="B.jpg" alt="" />
            <div id='Card-Detail'>
                <h1>{data.title}</h1>
                <p>{data.detail}</p>
            </div>
            <div id='btn'>
                <button>Read More</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default NovelCard
