import React from "react";
import CardContainer from "./CardContainer";
import axios from "axios";
import { AutocompleteContainer, Button } from "./ContainerStyles";
import { Autocomplete, TextField } from "@mui/material";
import Loading from "./Loading";

const headers = {
  "X-RapidAPI-Key": "ajUCuqnh5smshAkbBSVtBtIs2vuap1BPqKijsnmQn2wKnrHa1S",
  "X-RapidAPI-Host": "tasty.p.rapidapi.com",
};
const method = "GET";
const url = "https://tasty.p.rapidapi.com/recipes/list";
const tagslist = [
  { label: "Dairy Free", id: "dairy_free" },
  { label: "Comfort Food", id: "comford_food" },
  { label: "Easy", id: "easy" },
  { label: "Under 1 Hour", id: "under_1_hour" },
  { label: "Under 30 Minutes", id: "under_30_minutes" },
];

const RecipeContainer = () => {
  const [searchText, setSearchText] = React.useState("");
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const options = {
      method: method,
      url: url,
      params: { from: "0", size: "20", tags: "under_30_minutes" },
      headers: headers,
    };
    if (!searchText) {
      axios
        .request(options)
        .then((response) => {
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
          setLoading(false);
          setData(recipes);
        })
        .catch((error) => {
          setError(true);
          console.error(error);
        });
    }
  }, [searchText]);

  const setValue = (searchText: string) => {
    tagslist.find((item) => {
      if (item.label.includes(searchText)) {
        setSearchText(item.id);
        return item;
      }
    });
  };

  const executeSearch = React.useCallback(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list",
      params: { from: "0", size: "20", tags: searchText },
      headers: headers,
    };
    axios
      .request(options)
      .then((response) => {
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
        setLoading(false);
        setData(recipes);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  }, []);

  if (!data.length && error) {
    return (
      <div> No Recipes found! Search again for something in the database</div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <AutocompleteContainer>
        <Autocomplete
          onInputChange={(event, newInputValue) => {
            setValue(newInputValue);
          }}
          disablePortal
          id="combo-box-demo"
          options={tagslist}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Recipe Tags" />
          )}
        />
        <Button onClick={executeSearch}> Search Recipes </Button>
      </AutocompleteContainer>
      {data.length && <CardContainer data={data} />}
    </>
  );
};

export default RecipeContainer;
