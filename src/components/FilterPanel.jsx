import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { selectFilters } from "../store/filters/filters-selectors";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, removeFilter } from "../store/filters/filters-actions";

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (currentFilters.length === 0) return null;
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClick={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
