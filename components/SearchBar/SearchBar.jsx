import { Grid, Input } from "@nextui-org/react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const SearchBar = () => {
  return (
    <Grid.Container gap={2} justify="center" alignItems='center' css={{mx:'auto'} }>
      <Grid xs={10}>
        <Input
          clearable
          contentLeft={<SearchIcon size={16} />}
          contentLeftStyling={false}
          label=" "
          css={{
            w: "100%",
            "@xsMax": {
              mw: "300px",
            },
            "& .nextui-input-content--left": {
              h: "100%",
              ml: "$4",
              dflex: "center",
            },
          }}
          placeholder="Search or start a new chat"
        />
      </Grid>
      <Grid xs={2}>
        <FilterListIcon />
      </Grid>
    </Grid.Container>
  );
};

export default SearchBar;
