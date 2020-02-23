import { TableCell } from "@material-ui/core";
import clsx from "clsx";

const HeaderRender = props => {
  const { headerHeight, columns, classes, label, columnIndex } = props;
  return (
    <TableCell
      component="div"
      className={clsx(
        classes.tableCell,
        classes.flexContainer,
        classes.noClick
      )}
      variant="head"
      style={{ height: headerHeight }}
      align={columns[columnIndex].numeric || false ? "right" : "left"}
    >
      <span>{label}</span>
    </TableCell>
  );
};

export default HeaderRender;