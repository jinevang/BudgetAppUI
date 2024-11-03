import { Box, Typography } from "@mui/material"
import { FaGear } from "react-icons/fa6";

const Header = () => {
	return <Box sx={{
		height: '5vh',
		top: 0,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		boxSizing: 'border-box',
		padding: '2ch',
		marginTop: '2ch',
		marginBottom: '2ch',
		
	}}>
		<Typography fontFamily='inherit' fontSize={35} fontWeight={600}>Budgeting App</Typography>
		<FaGear/>
	</Box>
}

export default Header;