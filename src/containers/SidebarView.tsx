import { Box, Grid2 as Grid, Typography } from "@mui/material";
import SidebarButton from "../components/SidebarButton";
import { setCurrentMonth, setCurrentScreen, setCurrentYear } from "../reducers";
import { useDispatch } from "react-redux";

const SidebarView = () => {

	const dispatch = useDispatch();

	const date = new Date();
	const month = date.getMonth();
	const year = date.getFullYear();

	return <Box sx={{
		display: 'flex',
		flexDirection: 'column',
		width: '30%',
		borderRight: '1px solid gray',
		height: '100%',
		textAlign: 'left',
		padding: '1ch',
	}}>
		<Grid container size={2} columns={2} spacing={1}>
			<Grid size={1}>
				<SidebarButton buttontext="This Year" onclick={() => {
					dispatch(setCurrentScreen({screen: 'year'}));
					dispatch(setCurrentYear({year: year}));
					dispatch(setCurrentMonth({month: null}))

					}}/>
			</Grid>
			<Grid size={1}>
				<SidebarButton buttontext="This Month" onclick={() => {
					dispatch(setCurrentScreen({screen: 'month'}));
					dispatch(setCurrentMonth({month: month}))
					}}/>
			</Grid>
		</Grid>

		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			gap: '1ch',
			marginTop: '1ch'
		}}>
			{Array.from({length: 12}, (_, index) => 
			<Box
			key={index}
			onClick={() => {
				console.log(_);
				console.log(index);
				dispatch((setCurrentMonth({month: index})));
			}}
			sx={{
				border: '1px solid gray',
				borderRadius: '4px',
				padding: '1ch'
			}}>
	    	<Typography>{new Date(0, index).toLocaleString('default', { month: 'long' })}</Typography>
			</Box>
			)}
		</Box>
	</Box>
}

export default SidebarView;