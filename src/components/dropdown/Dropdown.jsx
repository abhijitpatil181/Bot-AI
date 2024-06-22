import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ratings = [
  { id: 1, value: "1" },
  { id: 2, value: "2" },
  { id: 3, value: "3" },
  { id: 4, value: "4" },
  { id: 5, value: "5" },
];

const Dropdown = ({ selectedRating, onChangeHandler }) => {
  return (
    <FormControl sx={{ maxWidth: "9rem", marginLeft: "1rem" }} size="small">
      <Select
        value={selectedRating}
        displayEmpty
        onChange={(e) => onChangeHandler(e, "filter")}
        renderValue={
          selectedRating !== "" ? undefined : () => <p>All Ratings</p>
        }
      >
        <MenuItem value="">
          <em>Reset</em>
        </MenuItem>
        {ratings.map((rating) => (
          <MenuItem value={rating.id} key={rating.id}>
            {rating.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
