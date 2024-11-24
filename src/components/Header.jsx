import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: {
					xs: 'column',
					md: 'row',
				},
				gap: 4,
				padding: 2,
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Box>Logo</Box>

			<Typography
				variant='h5'
				fontWeight={'bold'}
			>
				Centralized Data Management
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: 2,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Avatar></Avatar>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'left',
					}}
				>
					<Typography>User Name</Typography>
					<Typography>Admin</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
