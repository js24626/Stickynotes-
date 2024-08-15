import React, { useRef, useState, useEffect } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);

 
  const jsonData = [
    {
      id: 1,
      title: "Text ",
      body: "This is the body of post 1."
    },
  ];


  const [data, setData] = useState([]);

  useEffect(() => {
    
    const apiData = jsonData.map(post => ({
      id: post.id, 
      desc: post.title,
      filesize: '6mb',
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    }));
    setData(apiData);
  }, []);

  
  const handleAddCard = () => {
    const newCard = {
      id: data.length + 1,
      desc: `Text ${data.length + 1}`,
      filesize: '6mb',
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    };
    setData([newCard, ...data]);
  };

 
  const handleRemoveCard = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-5">
     
      <button
        onClick={handleAddCard}
        className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110"
      >
        Add New Card
      </button>
      {data.map((item) => (
        <Card 
          key={item.id}
          data={item} 
          reference={ref} 
          onClose={() => handleRemoveCard(item.id)} 
          onAdd={handleAddCard} 
        /> 
      ))}
    </div>
  );
}

export default Foreground;
