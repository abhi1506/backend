
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCareer } from '../../redux/admin/slice/careerAdminSlice';
import {
    TextField,
    Button,
    Box,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Grid,
    Typography,
    useMediaQuery
} from '@mui/material';
import { toast } from 'react-toastify'; 
import Header from './header';
const JobForm = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const dispatch = useDispatch();
    const [jobData, setJobData] = useState({
        jobTitle: '',
        jobDescription: '',
        department: '',
        location: '',
        employmentType: '',
        interviewProcess: '',
        salaryRange: '',
        requirements: {
            education: '',
            skills: [],
            experience: '',
        },
        openings: '',
        responsibilities: [],
        openingDate: '',
        closingDate: '',
        companyOverview: '',
        benefits: [],
        preferredQualifications: [],
        jobCategory: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('requirements.')) {
            const subKey = name.split('.')[1];
            setJobData((prevData) => ({
                ...prevData,
                requirements: {
                    ...prevData.requirements,
                    [subKey]: value,
                },
            }));
        } else if (name === 'skills') {
            const skills = value.split(',').map(skill => skill.trim());
            setJobData((prevData) => ({
                ...prevData,
                requirements: {
                    ...prevData.requirements,
                    skills,
                },
            }));
        } else if (name === 'responsibilities') {
            const responsibilities = value.split(',').map(resp => resp.trim());
            setJobData((prevData) => ({
                ...prevData,
                responsibilities,
            }));
        } else if (name === 'benefits') {
            const benefits = value.split(',').map(ben => ben.trim());
            setJobData((prevData) => ({
                ...prevData,
                benefits,
            }));
        } else if (name === 'preferredQualifications') {
            const qualifications = value.split(',').map(qual => qual.trim());
            setJobData((prevData) => ({
                ...prevData,
                preferredQualifications: qualifications,
            }));
        } else {
            setJobData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCareer(jobData))
            .unwrap()
            .then(() => {
                toast.success("Job posting created successfully!"); // Success toast
                // Reset the form
                setJobData({
                    jobTitle: '',
                    jobDescription: '',
                    department: '',
                    location: '',
                    employmentType: '',
                    interviewProcess: '',
                    salaryRange: '',
                    requirements: {
                        education: '',
                        skills: [],
                        experience: '',
                    },
                    openings: '',
                    responsibilities: [],
                    openingDate: '',
                    closingDate: '',
                    companyOverview: '',
                    benefits: [],
                    preferredQualifications: [],
                    jobCategory: '',
                });
            })
            .catch((error) => {
                toast.error(`Failed to create job posting: ${error.message}`); // Error toast
            });
    };

    return (
        <Box m="20px">
         <Box display="flex" justifyContent="flex-start">
            <Header title="CREATE JOB" subtitle="Create a New Job Posting" />
          </Box>
         <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Job Title"
                        name="jobTitle"
                        value={jobData.jobTitle}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Job Description"
                        name="jobDescription"
                        value={jobData.jobDescription}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Department"
                        name="department"
                        value={jobData.department}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={jobData.location}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Employment Type</InputLabel>
                        <Select
                            name="employmentType"
                            value={jobData.employmentType}
                            onChange={handleChange}
                            variant="filled"
                        >
                            <MenuItem value="Full-time">Full-time</MenuItem>
                            <MenuItem value="Part-time">Part-time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                            <MenuItem value="Temporary">Temporary</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Interview Process</InputLabel>
                        <Select
                            name="interviewProcess"
                            value={jobData.interviewProcess}
                            onChange={handleChange}
                             variant="filled"
                        >
                            <MenuItem value="Phone Screen">Phone Screen</MenuItem>
                            <MenuItem value="On-site Interview">On-site Interview</MenuItem>
                            <MenuItem value="Technical Interview">Technical Interview</MenuItem>
                            <MenuItem value="Final Interview">Final Interview</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Salary Range"
                        name="salaryRange"
                        value={jobData.salaryRange}
                        onChange={handleChange}
                        required
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Education Requirement"
                        name="requirements.education"
                        value={jobData.requirements.education}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Skills (comma separated)"
                        name="skills"
                        value={jobData.requirements.skills.join(', ')}
                        onChange={handleChange}
                        required
                         variant="filled"
                         rows={2}
                         multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Experience (optional)"
                        name="requirements.experience"
                        value={jobData.requirements.experience}
                        onChange={handleChange}
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Openings"
                        type="number"
                        name="openings"
                        value={jobData.openings}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Responsibilities (comma separated)"
                        name="responsibilities"
                        value={jobData.responsibilities.join(', ')}
                        onChange={handleChange}
                        required
                         variant="filled"
                         rows={4}
                         multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Opening Date"
                        type="date"
                        name="openingDate"
                        value={jobData.openingDate}
                        onChange={handleChange}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Closing Date"
                        type="date"
                        name="closingDate"
                        value={jobData.closingDate}
                        onChange={handleChange}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Company Overview"
                        name="companyOverview"
                        value={jobData.companyOverview}
                        onChange={handleChange}
                        required
                         variant="filled"
                         rows={4}
                         multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Benefits (comma separated)"
                        name="benefits"
                        value={jobData.benefits.join(', ')}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Preferred Qualifications (comma separated)"
                        name="preferredQualifications"
                        value={jobData.preferredQualifications.join(', ')}
                        onChange={handleChange}
                        required
                         variant="filled"
                         rows={4}
                         multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Job Category"
                        name="jobCategory"
                        value={jobData.jobCategory}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="success" style={{ marginTop: '16px' }}>
                Submit Job Posting
            </Button>
        </form>
       </Box>
    );
};

export default JobForm;

