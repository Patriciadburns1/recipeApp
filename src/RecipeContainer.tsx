import React from "react";
import { Card, CardData, Instructions } from "./Card";
import { Container } from "./styles";

const RecipeContainer: React.FunctionComponent<{ data: CardData[] }> = ({
  data,
}) => {
  console.log(data, "in container");
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

export default RecipeContainer;
