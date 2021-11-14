import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Skeleton } from "@material-ui/lab";

export default function DataTableSkeleton(props) {
    return (
        <TableRow>
            <TableCell scope="row" colSpan={props.colCount}>
                <Skeleton
                    height={props?.height || 30}
                />
            </TableCell>
        </TableRow>
    );
}
