import { Box, Grid2, Typography } from "@mui/material"

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { useAppSelector } from '../lib/store';

import moment from 'moment';

// TODO: needs , wants, savings, income

// TODO: most spent on location, most spent on category

// TODO: most common category, most common location

const MainContentView = () => {
  
	const { currentYear, currentMonth } = useAppSelector((state) => state.app);

	const columns: GridColDef<(typeof rows)[number]>[] = [
		{
			field: 'date',
			headerName: 'Date',
			sortable: true,
			width: 160,
			editable: true,
			valueGetter: (params: any) => {
				const dateValue = params;
				return dateValue
				? moment().format(dateValue)
				: null;
			},
		},
		{
			field: 'name', headerName: 'Transaction Name', width: 150, editable: true
		},
		{
			field: 'amount',
			headerName: 'Amount',
			type: 'number',
			width: 150,
			editable: true,
			valueFormatter: (params: any) => {
				return `$${params}`
			}
		},
		{
			field: 'category',
			headerName: 'Category',
			type: 'singleSelect',
			valueOptions: [
				{
					value: 'health',
					label: '🩺 Health',
				},
				{
					value: 'foodDining',
					label: '🍚 Food/Dining'
				},
				{
					value: 'desertDrinks',
					label: '🍮 Dessert/Drinks',
				},
				{
					value: 'entertainment',
					label: '🎬 Entertainment',
				},
				{
					value: 'shopping',
					label: '🛍️ Shopping'
				}
			],
			width: 150,
			editable: true,
		},
		{
			field: 'notes',
			headerName: 'Notes',
			width: 200,
			editable: true,
		},
	];
	
	const rows = [
		{ name: 'SBP', amount: 91.51, category: 'health', id: 1, date: '10/1/2024' },
		{ name: 'TP Tea', amount: 15.31, category: 'foodDining', id: 2, date: '10/12/2024' },
		{ name: 'Cristianos', amount: 12.00, id: 3, category: 'foodDining', date: '10/24/2024' },
		{ name: 'Sonny Angel', amount: 25.00, category: 'shopping', date: '10/20/2024', id: 4 },
		{ name: 'Stussy', amount: '275', category: 'shopping', date: '10/31/2024', notes: 'Waylisha paid me back for hers', id: 5 },
		{ name: 'Chops', amount: 12.15, category: 'foodDining', date: '10/02/2024', id: 6 },
		{ name: 'Nintendo', amount: 59.99, category: 'entertainment', date: '10/07/2024', id:7 },
		{ name: 'Spotify', amount: 12.05, category: 'entertainment', date: '10/27/2024', id: 8 },
	];
	

	return <Box
	sx={{
		width: '70%',
		padding: '1ch',
		maxWidth: '70%',
	}}>
	<Typography fontSize={20}>Transactions for {currentMonth != null && moment().month(currentMonth ?? '').format('MMMM')} {currentYear || ''}</Typography>
		<Grid2 container spacing={1}>
			<Grid2>
				<Box sx={{border: '1px solid gray', borderRadius: '4px', p: '1ch'}}>
					Total Spendings
					$4
				</Box>
			</Grid2>
			<Grid2>
				<Box sx={{border: '1px solid gray', borderRadius: '4px', p: '1ch'}}>
					Total Income
					$5
				</Box>
			</Grid2>
		</Grid2>
	<DataGrid columns={columns} rows={rows} sx={{
	}}/>

	</Box>
}

export default MainContentView;