import ReactDataGrid from "react-data-grid";

export default Datagrid = (props) => {

	const { columns, rows } = props

	return (
      <ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={rows.length}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={false}
      />
    );
}