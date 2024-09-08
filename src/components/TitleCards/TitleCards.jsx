// import React, { useEffect, useRef } from 'react'
// import "./TitleCards.css"
// import cards_data from '../../assets/cards/Cards_data'


// const TitleCards = () => {
//   const cardRef = useRef();

//   const handleWheel = (event) =>{
//     event.preventDefault;
//     cardRef.current.scrollLeft += event.deltaY;
//   }

//   useEffect(() => {
//     cardRef.current.addEventListener("wheel", handleWheel)
//   }, [handleWheel])

//   return (
//     <div className='title-cards'>
//       <h2>Popular on Netfilex</h2>
//       <div className="card-list" ref={cardRef}>
//         {
//           cards_data.map((card, index) => {
//             return <div className="card" key={index}>
//               <img src={card.image} alt="" />
//               <p>{card.name}</p>
//             </div>
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default TitleCards




import React, { useEffect, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';

const TitleCards = ({title, category}) => {
  const cardRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault(); // Invoke preventDefault correctly
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const cardListRef = cardRef.current;

    // Add event listener
    cardListRef.addEventListener('wheel', handleWheel);

    // Clean up event listener on unmount
    return () => {
      cardListRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on Netfilex"}</h2>
      <div className="card-list" ref={cardRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;

