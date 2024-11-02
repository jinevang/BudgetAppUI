import { Box } from "@mui/material";

const SidebarView = () => {
	return <Box sx={{
		display: 'flex',
		flexDirection: 'column',
		width: '30%',
		borderRight: '1px solid gray',
		height: '100%',
		textAlign: 'left'
	}}>
		Sidebar view will go here
	</Box>
}

export default SidebarView;