import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  // CardTextBody,
  CardStatWrapper,
  // CardStats,
  // LinkText,
  CardTextDescription,
} from "./CardStyles";
import Tilt from "react-parallax-tilt";
import React from "react";

export interface Instructions {
  appliance: null | string;
  display_text: string;
  end_time: number;
  id: number;
  position: number;
  start_time: number;
  temperature: number | null;
}
export interface CardData {
  name: string;
  description: string;
  instructions: Instructions[];
  thumbnail_url: string;
  yields: string;
}

export const Card = ({
  name,
  description,
  instructions,
  thumbnail_url,
  yields,
}: CardData) => {
  console.log(
    instructions.map((item: Instructions, key: number) => {
      return <div> {item.display_text}</div>;
    })
  );

  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={thumbnail_url} />
        <CardTextWrapper>
          <CardTextDescription>{description}</CardTextDescription>
          <CardTextTitle>{name}</CardTextTitle>
          {/* <CardTextBody>
            {instructions.map((item: Instructions, key: number) => {
              return <div> {item.display_text} </div>
            })}
          </CardTextBody> */}
        </CardTextWrapper>
        <CardStatWrapper>
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};
