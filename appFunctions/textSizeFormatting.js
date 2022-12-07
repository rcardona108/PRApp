import React, {useState} from "react";

const TextSizeFormat = (StringSize) => {
  const [FinalSize,setFinalSize] = useState(30);
  if(StringSize > 5){
    for(let i = 5; i < StringSize; i++){
        setFinalSize(FinalSize - 1.5);
    }
  }
}
export default TextSizeFormat;

