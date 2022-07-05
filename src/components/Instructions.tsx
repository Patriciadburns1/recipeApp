import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  InstructionContainer,
  InstructionItem,
  InstructionName,
  InstructionTitle,
} from "./InstructionStyles";

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
  if (!instructions) {
    return (
      <div>
        Apologies it's unclear what happened please go back to the Homempage
        <Link to="/"> Home </Link>
      </div>
    );
  }

  return (
    <InstructionContainer>
      <InstructionName>{name && name} </InstructionName>
      <div>
        <InstructionTitle>Instructions</InstructionTitle>:
        {instructions &&
          instructions.map((item: Instructions, index: number) => {
            const num = index + 1;
            const number = num.toString();
            return (
              <InstructionItem key={index}>
                {number}. {item.display_text}
              </InstructionItem>
            );
          })}
      </div>
    </InstructionContainer>
  );
};

export default Instructions;
