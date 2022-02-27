import React from 'react'
import CardComponent from '../../CardComponent/CardComponent';

const FirstYearComponent = () => {
    var titles={
        card1:{
          img:"https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
          title:'C++',
          content:'Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation',
          link:'/engtrack/firstyear/component/cpp'
        },
        card2:{
          img:"https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
          title:'Java',
          content:'Learn Competitive Programming.',
          link:"#"
        },
        card3:{
          img:"https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
          title:'Python',
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

export default FirstYearComponent