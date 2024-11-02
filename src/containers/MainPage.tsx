import { Box, Button, Input } from "@mui/material";
import SidebarView from "./SidebarView";
import MainContentView from "./MainContentView";
import Header from "./Header";

const MainPage = () => {
	return <Box sx={{
		width: '100vw'
	}}>
		<Header/>
		<Box sx={{
			display: 'flex',
			height: '95vh',
			width: '100%',
		}}>
			<SidebarView/>
			<MainContentView/>
		</Box>
	</Box>
}

export default MainPage;