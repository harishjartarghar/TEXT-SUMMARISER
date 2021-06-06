import React,{useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SUMMARY_INPUT from './Summary';
import TF_IDF from './tf_idf';
import BERT from './bert';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

   const [link,setLink]=useState("");
   const [text,setText]=useState("");
   const [lines,setLines]=useState(10);
   const [tf_idf,setTF_IDF]=useState("");
   const [bert,setBert]=useState("");

function SUBMIT()
{
  if((link.trim()==="" || link.trim()===undefined || link.trim()===null) && (text.trim()==="" || text.trim()===undefined || text.trim()===null))
  {
    alert("Enter either url or document text!");
  }
  else if(link.trim()!=="" && text.trim()!=="")
  {
    alert("Enter only one field!");
  }
  else if(link.trim()!=="" && link.trim()!==undefined && link.trim()!==null)
  {
            axios.post('http://0.0.0.0:5000/api/summary2', {
            'url': link,
            'lines': lines
          })
          .then(function (response) {
            setBert(response["bert"]);
            setTF_IDF(response["tf_idf"]);
          })
          .catch(function (error) {
            console.log(error);
          });
  }
  else if(text.trim()!=="" && text.trim()!==undefined && text.trim()!==null)
  { 
                axios.post('http://0.0.0.0:5000/api/summary1', {
                'text': text,
                'lines': lines
              })
              .then(function (response) {
                setBert(response["bert"]);
                setTF_IDF(response["tf_idf"]);
              })
              .catch(function (error) {
                console.log(error);
              });

  }
}

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
          <SUMMARY_INPUT 
              SUBMIT={SUBMIT} 
              link={link} 
              text={text}
              setLines={setLines}
              setTF_IDF={setTF_IDF}
              setText={setText}
              setBert={setBert}
              setLink={setLink}

          />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          
          <Grid container spacing={3}>
       

        <Grid item xs={12}>
          <Paper className={classes.paper}><TF_IDF data={tf_idf}/></Paper>
        </Grid>
        <Grid item xs={12}>
          
          <Paper className={classes.paper}><BERT data={bert}/></Paper>
        
        
        </Grid>
      </Grid>
        
        
        </Grid>
      </Grid>
    </div>
  );
}
