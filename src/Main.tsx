import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./About";
import RecipeContainer from "./RecipeContainer";
import axios from "axios";
import { Banner, Button, Input, TextForBanner } from "./styles";

const headers = {
  "X-RapidAPI-Key": "ajUCuqnh5smshAkbBSVtBtIs2vuap1BPqKijsnmQn2wKnrHa1S",
  "X-RapidAPI-Host": "tasty.p.rapidapi.com",
};
const method = "GET";
const url = "https://tasty.p.rapidapi.com/recipes/list";


const Main = () => {
  // const [searchVal, setSearchVal] = React.useState("");
  const [searchText, setSearchText] = React.useState("");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let options = {
      method,
      headers,
      url,
      params: { from: "0", size: "20", tags: "under_30_minutes" },
    };
    if (!searchText) {
      axios
        .request(options)
        .then((response) => {
          console.log(response, "response");
          const data = response?.data.results;
          const recipes = data.map(
            (item: {
              name: string;
              description: string;
              instructions: string;
              thumbnail_url: string;
              yields: string;
            }) => {
              return {
                name: item.name,
                description: item.description,
                instructions: item.instructions,
                thumbnail_url: item.thumbnail_url,
                yields: item.yields,
              };
            }
          );
          setData(recipes);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchText]);

  const executeSearch = React.useCallback(() => {
    if (searchText.length > 2) {
      const options = {
        method,
        headers,
        url,
        params: { from: "0", size: "20", tags: searchText },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response, "response");
          const data = response?.data.results;
          const recipes = data.map(
            (item: {
              name: string;
              description: string;
              instructions: string;
              thumbnail_url: string;
              yields: string;
            }) => {
              return {
                name: item.name,
                description: item.description,
                instructions: item.instructions,
                thumbnail_url: item.thumbnail_url,
                yields: item.yields,
              };
            }
          );
          setData(recipes);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchText]);

  return (
    <BrowserRouter>
      <Banner>
        <TextForBanner> [ ... Recipe Finder ] </TextForBanner>
      </Banner>
      <Input
        placeholder="Search here..."
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setSearchText(e.target.value)
        }
        value={searchText}
        type="text"
      />
      <Button onClick={executeSearch}> Search </Button>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<RecipeContainer data={data} />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
