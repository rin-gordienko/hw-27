import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import DatePickerFunc from "./DatePickerFunc";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

const schema = yup.object({
  email: yup.string().email().required("Please, enter correct email"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Please, enter a correct number"),
});

const Form = () => {
  const { handleSubmit, control } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Passenger 1 (Adult)</Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                required
                fullWidth
                label="First name"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="middle"
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                {...field}
                label="Middle"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                required
                fullWidth
                {...field}
                label="Last name"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="suffix"
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                {...field}
                label="Suffix"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={5}>
          <DatePickerFunc />
          {/* <Controller
            control={control}
            name="birthDate"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                required
                fullWidth
                {...field}
                type="date"
                label="Date of birth"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          /> */}
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="email"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                required
                fullWidth
                {...field}
                label="Email address"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="phoneNumber"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                required
                fullWidth
                {...field}
                label="Phone number"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              ></TextField>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="redress"
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                {...field}
                label="Redress number"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="travellerNumber"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                required
                fullWidth
                {...field}
                type="tel"
                label="Known traveller number"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", "justify-content": "end" }}>
        <Button type="submit" variant="outlined" size="large">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;
