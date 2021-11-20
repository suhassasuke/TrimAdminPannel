import { Container, Grid } from '@material-ui/core'
import React from 'react'

export default function ProfileContainer(){
	return (
		<Container>
			<Grid container>
				<Grid item md={4}></Grid>
				<Grid item md={8}></Grid>
			</Grid>
		</Container>
	)
}