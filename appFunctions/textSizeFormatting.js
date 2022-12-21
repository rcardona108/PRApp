import React, {useState} from "react";

const TextSizeFormat = (StringSize) => {
  const [FinalSize,setFinalSize] = useState(30);
  let newSize = FinalSize;
  
  if(StringSize > 5){
    for(let i = 5; i < StringSize;i++){
        newSize = newSize - 1.5;
        
    }
  }

  setFinalSize(newSize);
  return(FinalSize);
}

export default TextSizeFormat;

