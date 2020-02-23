import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from "@material-ui/icons/DeleteOutlineRounded";
import clsx from "clsx";

const CellRenderer = props => {
  const {
    cellData,
    columns,
    classes,
    dataKey,
    rowHeight,
    rowData,
    onRowClick,
    columnIndex
  } = props;
  const onClick = e=>{
    e.stopPropagation();
    onRowClick(e, rowData, dataKey)
  }
  return (
    <TableCell
      onClick={onClick}
      component="div"
      className={clsx(classes.tableCell, classes.flexContainer, {
        [classes.noClick]: onRowClick == null
      })}
      variant="body"
      style={{ height: rowHeight }}
      align={
        (columnIndex != null && columns[columnIndex].numeric) || false
          ? "right"
          : "left"
      }
    >
      {dataKey === "delete" ? <DeleteIcon /> : cellData}
    </TableCell>
  );
};

export default CellRenderer;
