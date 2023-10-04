import React from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();

  const columns: GridColDef[] = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">

      <Header title="CUSTOMERS" subtitle="List of Customers">
      </Header>
      <Box mt="40px" height="75vh" 
        sx={{
          "& .MuiDataGrid-root":{
            border: "none"
          },
          "& .MuiDataGrid-cell":{
            borderBottom: "none"
          },
          "& .MuiDataGrid-columnHeaders":{
            backgroundColor: theme.palette.background.alt,
            borderBottom: "none",
            color: theme.palette.secondary[100],
          },
          "& .MuiDataGrid-virtualScroller":{
            backgroundColor: theme.palette.primary.light
          },
          "& .MuiDataGrid-footerContainer":{
            backgroundColor: theme.palette.background.alt,
            borderTop: "none",
            color: theme.palette.secondary[100],
          },
        }}>


<DataGrid
      loading={isLoading || !data}
      getRowId={(row) => row._id}
      rows={data || []}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 20,
          },
        },
      }}
      pageSizeOptions={[5]}
    />

        </Box>

    </Box>
  );
};

export default Customers;

// <Box m="1.5rem 2.5rem" sx={{ height: 400, width: '100%' }}>
// <Header title="CUSTOMERS" subtitle="List of Customers" sx={{ height: 400, width: '100%' }}>
// </Header>
//     </Box>

// const Customers = () => {
//   const theme = useTheme();
//   const { data, isLoading } = useGetCustomersQuery();

//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//       field: 'firstName',
//       headerName: 'First name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'lastName',
//       headerName: 'Last name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 110,
//       editable: true,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params: GridValueGetterParams) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];

//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];

//   return (

// <DataGrid
//   rows={rows}
//   columns={columns}
//   initialState={{
//     pagination: {
//       paginationModel: {
//         pageSize: 5,
//       },
//     },
//   }}
//   pageSizeOptions={[5]}
//   checkboxSelection
//   disableRowSelectionOnClick
// />
// // </Box>

//   );
// };

// export default Customers;
