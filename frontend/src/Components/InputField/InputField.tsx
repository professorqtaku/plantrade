import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  label: string;
}

const InputField = ({label}: Props) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label={label} id={label} />
    </Box>
  );
};

export default InputField;
