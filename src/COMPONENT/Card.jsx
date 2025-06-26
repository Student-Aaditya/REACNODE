import React from 'react'
import NovelCard from './NovelCard'
import './NovelCard.css'

function Card() {
    const data1={
        title:"Harry Potter",
        detail:"best book in the world by the writer of the story"
    }
    const data2={
        title:"Harry Potter",
        detail:"best book in the world by the writer of the story"
    }
  return (
    <>
    <section id='cards'>
      <NovelCard data={data1}/>
      <NovelCard data={data2}/>
       <NovelCard data={data1}/>
      <NovelCard data={data2}/>
    </section>
    <section id='cards'>
      <NovelCard data={data1}/>
      <NovelCard data={data2}/>
       <NovelCard data={data1}/>
      <NovelCard data={data2}/>
    </section>
    </>
  )
}

export default Card
