import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Typography from '@mui/material/Typography'; // Grid version 1
import Input from './components/Input';
import Dropdown from './components/Dropdown';
function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
   <>
   <div className='hea h-100 w-100'>
    <h1 className='text-center text-white'>Auj Admission Form</h1>
   </div>
   <div className='mt-4'>
    <h1 className='text-center purco fs-4'> Admission Form</h1>
   </div>
   {/* FIRST ROW */}
   <div className='mar'>
   <Grid container >
    <Grid item p={1} xs={12} sm={6} lg={4} >
      <Typography className="purco fs-4">
        City<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
      <Dropdown/>
    </Grid>
    <Grid item p={1} xs={12} sm={6} lg={4} >
      <Typography className=" purco fs-4">
        Insttitute<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
      <Dropdown/>
    </Grid>
    <Grid item p={1} xs={12} sm={6} lg={4} >
      <Typography className="purco fs-4">
        Course<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
      <Dropdown/>
    </Grid>
    <Grid item p={1} xs={12} sm={6} lg={4} >
      <Typography className=" purco fs-6">
        Favourite Time?<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
      <Dropdown/>
    </Grid>
    <Grid item p={1} xs={12} sm={6} lg={4}>
      <Typography className=" purco fs-4">
        Full Name<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
    <Input/>
    </Grid>
    <Grid item p={1}  xs={12} sm={6} lg={4} >
      <Typography className=" fs-4 purco">
        Father Name <span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
    <Input/>
    </Grid>

    <Grid container my={1} className="d-flex justify-content-evenly" >
    <Grid item p={1}   xs={12} sm={6} lg={4}>
      <Typography className=" fs-4 purco">
        Email
        <span className='text-dark fs-6'>(carefully check)</span>
        <span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
    <Input/>
    </Grid>
    <Grid item p={1} xs={12} sm={6} lg={4} >
      <Typography className="purco fs-4">
        Permenant Address<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
    <Input />
    </Grid>
    </Grid>
    <Grid item p={1}  xs={12} sm={6} lg={4} >
      <Typography className="fs-4 purco">
        Contact Number<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
    <Input/>
    </Grid>
    <Grid item p={1}   xs={12} sm={6} lg={4}>
      <Typography className=" fs-4 purco">
        Gurdian Number<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
    <Input/>
    </Grid>
    <Grid item p={1}   xs={12} sm={6} lg={4} >
      <Typography className=" fs-4 purco">
        Last Qualification<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
      <Dropdown/>
    </Grid>
    <Grid item p={1}  xs={12} sm={6} lg={4} >
      <Typography className=" fs-4 purco">
        CNIC/Bform<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
    <Input/>
    </Grid>
    <Grid item p={1}  xs={12} sm={6} lg={4} >
      <Typography className=" fs-4 purco">
        Gender<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
      <Dropdown/>
    </Grid>
    <Grid item p={1}  xs={12} sm={6} lg={4} >
      <Typography className=" fs-4 purco">
        Date Of Birth<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
      <input type="date" className="rounded-pill inap w-75" />
    </Grid>
    <Grid item p={1}  xs={12} sm={6} lg={4} >
      <Typography className=" fs-6 purco">
      Passport Size Profile Image<span className='text-danger fw-bolder fs-4'>*</span>
      </Typography>
      <div className='picture'>
        <label>
            <div className="filebor ">
                
            <label>
              <br />
                <div className='stya'>
               <p className='txta'>Choose Picture</p>
                </div>
                <input type="file" className='purala' onChange={(e) => setSelectedFile(e.target.files[0])}/>
            {selectedFile ? (
  <p>Selected file: {selectedFile.name}</p>
) : (
  <p>No file selected</p>
)}
            </label>
            </div>
        </label>
        </div>
    </Grid>
    <br />
   </Grid>
    <Grid item p={1}  xs={12} sm={6} lg={4} >
      <button className='mainbtn'>Submit</button>
    </Grid>
    <br />
   </div>
   </>
  );
}

export default App;
