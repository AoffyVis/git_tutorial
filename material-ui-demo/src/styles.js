import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
      backgroundColor: "paper",
      padding: "64px 0 48px",
    },
    icon: {
        marginRight: "20px",
    },
    buttons: {
        marginTop: "40px",
    },
    btn: {
      border: 1,
      borderRadius: 3,
    },
    cardGrid: {
      padding: "20px 0",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      padding: "56.25%", //16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: "paper",
      padding: "50px 0"
    },
  });
 
export default useStyles;