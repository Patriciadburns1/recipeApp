import React from "react";
import { useLocation } from "react-router-dom";
import { InstructionContainer, InstructionName } from './InstructionStyles'; 

interface Instructions {
  appliance: null | string;
  display_text: string;
  end_time: number;
  id: number;
  position: number;
  start_time: number;
  temperature: number | null;
}

interface data {
  instructions: Instructions[];
  name: string;
}

const Instructions: React.FunctionComponent = ({}) => {
  const location = useLocation();
  const { instructions, name } = location.state as data;
  console.log(location.state);
  return (
    <InstructionContainer>
        <InstructionName>{name && name}     </InstructionName>
      <div> 
      Instructions:
        {instructions &&
          instructions.map((item: Instructions, index: number) => {
            return <p key={index}> {item.display_text} </p>;
          })}

        </div>

  
    </InstructionContainer>
  );
};

export default Instructions;
