import React from "react"; 
import { AboutContainer } from "./ContainerStyles";

const About: React.FunctionComponent<{}> = () => {
  return (
    <AboutContainer> 
      <div> Author: Patricia Burns </div>
      <div> Lives & Works Washington DC </div>
      <div> Contact 714-803-1857 </div>
      <div> Email PatriciaDBurns@gmail.com </div>
    </AboutContainer>
  )
}

export default About; 