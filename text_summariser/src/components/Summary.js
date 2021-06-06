import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:"20px"
  },
  submit:{
  	margin:"10px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 550,
  },
}));





function Summary({ 
              SUBMIT,
              link ,
              text,
              setLines,
              setTF_IDF,
              setText,
              setBert,
              setLink,
            }) {

  const classes = useStyles();
  


  return (
    <div className="App">


    <form className={classes.root} noValidate autoComplete="off" >
      <TextField id="filled-basic" label="Enter Link" variant="filled" value={link} onChange={(e)=>setLink(e.target.value)} fullWidth/>

    </form>
    	or
     <form className={classes.root} noValidate autoComplete="off" >
      <TextField id="filled-basic" label="Enter Text" variant="filled" fullWidth  value={text} multiline onChange={(e)=>setText(e.target.value)}
          rows={12}/>

    </form>
    <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">No of Lines</InputLabel>
        <Select
          native
       		fullWidth
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
          onChange={(e)=>{setLines(e.target.value)}}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={30}>30</option>

        </Select>
      </FormControl>

    <Button
            type="submit"
             onClick={SUBMIT}
            variant="contained"
            color="primary"
            className={classes.submit}
            size="small"
          >
            SUMMARISE
          </Button>
              <Button
            type="submit"
           
            variant="contained"
            color="secondary"
            className={classes.submit}
            size="small"
            onClick={()=>{setText("");setLink("");}}
          >
            RESET
          </Button>
    </div>
  );
}

export default Summary;
