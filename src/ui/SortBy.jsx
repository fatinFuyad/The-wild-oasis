import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  // we could use custom searchParams hook but that is something opiniated
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      value={currentSort}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;

// (a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0) * modifier
// (a[field] - b[field]) * modifier
/**
 * a.localeCompare(b) only works if 'a' and 'b' is string; if it is number then sorting will not work
 * a > b or a < b return 1, -1, 0; it will work both for strings and numbers but if the string are not same case or if the strings contains mixture of lowerCase and UpperCase then sorting will not work as expected. As lowercase and uppercase is diffrent is ASCII code. The sorting of string number will also not be as expected.
 Hence ('-23', '-2', '-4', '-3') will be ('-2', '-3', '-4', '-23')
 * The best method maybe to sort the strings and numbers differently.
 */

// if we does not provide value of select then after reloading the selected option will be removed from select box and the first value will be shown on the selec box.
