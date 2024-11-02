import { Box, Typography } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
	return <Box sx={{
		height: '5vh',
		top: 0,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		border: '1px solid red'
	}}>
		<Typography fontSize={35} fontWeight={600}>Budgeting App</Typography>
		<SettingsIcon/>
	</Box>
}

export default Header;