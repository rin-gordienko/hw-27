import Form from "./components/Form";
import "./App.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";



function App() {
  return (
    <div>
      <Container>
        <Typography variant="h3">Passenger information</Typography>
        <Typography variant="subtitle1">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </Typography>
        <Form />
      </Container>
    </div>
  );
}

export default App;
