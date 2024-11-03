import styled from "@emotion/styled"
import { Button } from "@mui/material"

const StyledSidebarButton = styled(Button)({
	width: '100%',
	border: '1px solid black',
	textTransform: 'capitalize'
})

const SidebarButton = ({buttontext, onclick}: {buttontext: string, onclick: any}) => {
	return <StyledSidebarButton onClick={onclick}>
		{buttontext}
	</StyledSidebarButton>	
}

export default SidebarButton;