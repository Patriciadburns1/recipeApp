import React from "react";
import { Card, CardData } from "./Card";
import { Container } from "./ContainerStyles";
import Loading from "./Loading";

const CardContainer: React.FunctionComponent<{
  data: CardData[],
}> = ({
  data = [], 
}) => {

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
