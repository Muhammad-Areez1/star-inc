import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const createData = (firstName, phoneNumber, emailAddress, activeStatus) => {
    return { firstName, phoneNumber, emailAddress, activeStatus };
  };
  
  const rows = [
    createData('John Doe', '123-456-7890', 'john.doe@example.com', 'Active'),
    createData('Jane Smith', '987-654-3210', 'jane.smith@example.com', 'Inactive'),
    createData('Alice Johnson', '555-555-5555', 'alice.johnson@example.com', 'Active'),
    createData('Bob Brown', '444-444-4444', 'bob.brown@example.com', 'Inactive'),
  ];

const starsUsers = () =>{

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='w-full py-20 px-10'>
            <TableContainer component={Paper} className='p-10 muiTable'>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell className='text-base font-extrabold'>First Name</TableCell>
                        <TableCell className='text-base font-extrabold'>Phone Number</TableCell>
                        <TableCell className='text-base font-extrabold'>Email Address</TableCell>
                        <TableCell className='text-base font-extrabold'>Active Status</TableCell>
                        <TableCell className='text-base font-extrabold' >Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.firstName}>
                        <TableCell component="th" scope="row" className='text-base font-normal'>
                            {row.firstName}
                        </TableCell>
                        <TableCell className='text-base font-normal'>{row.phoneNumber}</TableCell>
                        <TableCell className='text-base font-normal'>{row.emailAddress}</TableCell>
                        <TableCell className={`${row.activeStatus === 'Active' ? 'text-[#13BE00]' : 'text-[#FF0000]' } text-base font-normal`}>{row.activeStatus}</TableCell>
                        <TableCell>
                            <IconButton
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            >
                            <MoreVertIcon />
                            </IconButton>
                            <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                            <MenuItem onClick={handleClose}>Details</MenuItem>
                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                            </Menu>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default starsUsers;