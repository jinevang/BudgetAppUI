import { Box, Input, Select, Typography } from "@mui/material"
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
		<Typography fontFamily='inherit' fontSize={35} fontWeight={600} width={'30ch'}>Budgeting App</Typography>


		<Input type='date' placeholder="Date"></Input><Input placeholder="Transaction Name"/> <Input type="number" placeholder="Amount"/> <Select label="Category"></Select>
		<FaGear size={24} />
	</Box>
}

export default Header;