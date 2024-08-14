import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "I understand that  How to work react", 
      filesize: ".9mb", 
      close: true, 
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "I understand that how to make components and how to link", 
      filesize: ".9mb", 
      close: true, 
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "I understand that how to work tailwnd css in react", 
      filesize: ".9mb", 
      close: true, 
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "I understand that how to  dynamic the website", 
      filesize: ".9mb", 
      close: true, 
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} /> 
      ))}
    </div>
  );
}

export default Foreground;
