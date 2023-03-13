import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const Banner = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: auto;
  background-color: rgb(236 81 87);
  height: 40px;
  display: flex;
`;

export const TextForBanner = styled.span`
  color: #ffffff;
  display: flex;
  padding: 10px;
`;

export const Input = styled.input`
  margin: 20px;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export const AutocompleteContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
  margin-top: 15%;
  color: rgb(236 81 87); 
`;

export const LoadingContainer = styled.div`
  margin: auto;
  width: 50%;
  margin-top: 25%;
`;
