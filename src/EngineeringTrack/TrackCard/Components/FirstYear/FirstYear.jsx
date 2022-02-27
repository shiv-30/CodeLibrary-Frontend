import React from 'react'
import CardComponent from '../CardComponent/CardComponent'
import './FirstYear.css'
const FirstYear = () => {
  var titles={
    card1:{
      img:"https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title:'Language',
      content:'Learn C++,Java and Python Language.',
      link:'/engtrack/firstyear/component'
    },
    card2:{
      img:"https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title:'Competitive Programming',
      content:'Learn Competitive Programming.',
      link:"#"
    },
    card3:{
      img:"https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title:'DSA',
      content:'Learn data structures and algorithms.',
      link:"#"
    }
  };
  return (
    <div className='main__card'>
      <CardComponent data={titles.card1}  />
      <CardComponent data={titles.card2}  />
      <CardComponent data={titles.card3}  />
    
    </div>
      
  )
}

export default FirstYear