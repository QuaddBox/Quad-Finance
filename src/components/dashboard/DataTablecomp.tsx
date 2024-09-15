/** @format */

import React from "react";
import DataTable from "react-data-table-component";
import { Data, FavoriteMovers } from "@/types";

interface TableProps {
	data: Data[] | FavoriteMovers[];
	columns: any;
}
const conditionalRowStyles = [
	{
		when: (row: Data) => row.id % 2 === 0,
		style: {
			background: "#0b0b15",
			color: "white",
		},
	},
];

const DataTablecomp = ({ data, columns }: TableProps) => {
	return (
		<div>
			<DataTable
				columns={columns}
				data={data}
				conditionalRowStyles={conditionalRowStyles}
				className="flex items-center justify-center mx-auto"
				customStyles={{
					rows: {
						style: {
							backgroundColor: "#060610",
							color: "white",
							padding: "0px 20px",
						},
					},

					headRow: {
						style: {
							backgroundColor: "#1B1B22",
							color: "white",
							border: "none",
							outline: "none",
							textAlign: "center",
							width: "100%",
							padding: "20px 20px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						},
					},
				}}
			/>
		</div>
	);
};

export default DataTablecomp;
