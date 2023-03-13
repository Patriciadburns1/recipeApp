import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextDescription,
  CardTextBody,
  CardInstructionWrapper,
  LinkWrapper,
} from "components/Card/CardStyles";
import Tilt from "react-parallax-tilt";
import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <Tilt>
      <CardWrapper>
        {thumbnail_url && <CardImage background={thumbnail_url} />}
        <CardTextWrapper>
          {name && <CardTextTitle>{name}</CardTextTitle>}
          <CardTextDescription>
            {description && description}
          </CardTextDescription>

          {yields && (
            <CardTextDescription> Yields: {yields}</CardTextDescription>
          )}
          <CardTextBody></CardTextBody>
        </CardTextWrapper>
        <CardInstructionWrapper>
          <LinkWrapper>
            <Link
              to="/instructions"
              state={{ name: name, instructions: instructions }}
              style={{ color: "white", textDecoration: "none" }}
            >
              Go to Full Recipe
            </Link>
          </LinkWrapper>
        </CardInstructionWrapper>
      </CardWrapper>
    </Tilt>
  );
};
