import { Box, Button, Input } from "@mui/material";
import SidebarView from "./SidebarView";
import MainContentView from "./MainContentView";
import Header from "./Header";

const MainContainer = () => {
	return <Box sx={{
		width: '100vw',
		overflowX: 'hidden'  // Add this to prevent horizontal scrolling

	}}>
		<Header/>
		<Box sx={{
			display: 'flex',
			height: '95vh',
			width: '100vw',
			overflowX: 'hidden'  // Add this here as well

		}}>
			<SidebarView/>
			<MainContentView/>
		</Box>
	</Box>
}

export default MainContainer;