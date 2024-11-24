import React from 'react';
import { Header } from '../components';
import { Box, Button, Typography } from '@mui/material';
import { CusTable, CusPrimBtn } from '../shared';
const AdminPage = () => {
	const columns = [
		{ id: 'id', label: 'ID', minWidth: 30 },
		{ id: 'name', label: 'Name', minWidth: 170 },
		{
			id: 'role',
			label: 'Role',
			minWidth: 150,
		},
		{
			id: 'department',
			label: 'Department',
			minWidth: 150,
		},
		{
			id: 'uname',
			label: 'Username',
			minWidth: 150,
		},
	];

	const rows = [
		{
			id: 323,
			name: 'Sample',
			role: 'Sample',
			department: 'Sample',
			uname: 'sample',
		},
	];

	return (
		<Box
			sx={{
				p: 0,
				m: 0,
				display: 'flex',
				flexDirection: 'column',
				width: '100vw',
				height: '100vh',
				bgcolor: 'primary-blue',
			}}
		>
			<Header />
			<Box sx={{ display: 'flex', flexGrow: 1, bgcolor: 'white' }}>
				<Box
					color={'black'}
					sx={{
						padding: 6,
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						gap: 4,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'justify-end',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
							}}
						>
							<Typography>Hi, Name!</Typography>
							<Typography>Manage Users Here</Typography>
						</Box>
						<CusPrimBtn label={'New User +'} />
						{/* <Button
							variant='contained'
							sx={{ bgcolor: 'primary-blue' }}
						>
							New User +
						</Button> */}
					</Box>
					<Box>
						<CusTable
							columns={columns}
							rows={rows}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AdminPage;
