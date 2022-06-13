import React from "react";
import { Card, CardData, Instructions } from "./Card";
import { Container } from "../styles";

const CardContainer: React.FunctionComponent<{ data: CardData[] }> = ({
  data=[],
}) => {
  if (!data.length) {
    return (
      <div> No Recipes found! Search again for something in the database</div>
    );
  }
  return (
    <Container>
      {data.map((item: CardData, index) => {
        return (
          <div key={index}>
            <Card
              name={item.name}
              description={item.description}
              thumbnail_url={item.thumbnail_url}
              instructions={item.instructions}
              yields={item.yields}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default CardContainer;
