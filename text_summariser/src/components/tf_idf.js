
import {TextField,makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:"20px"
  },
}));


function TF_IDF({data}) {
			 const classes = useStyles();
  return (
    <div className="App">
    TF-IDF
      	<form className={classes.root} noValidate autoComplete="off" >
      <TextField id="filled-basic"  variant="filled" fullWidth  multiline
          rows={7}
          value={data}
          InputProps={{
            readOnly: true,
          }}
          />

    </form>
    </div>
  );
}

export default TF_IDF;
