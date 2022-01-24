import './App.css';
import  { useState, useEffect } from "react"
import { Button, Card, CardContent, Typography} from "@mui/material"
import * as axios from 'axios';

const quotesUrl = "https://type.fit/api/quotes";

function App() {
  const [quoteText, newQuoteText] = useState('');
  const [quoteAuthor, newQuoteAuthor] = useState('');

  const getQuotesWithAxios = async () => {
    let randNumber = Math.floor(Math.random() * 1000) + 1;
    const response = await axios.get(quotesUrl);
    newQuoteText(response.data[randNumber].text);
    newQuoteAuthor(response.data[randNumber].author);
  };

  useEffect(() => {
    getQuotesWithAxios();
  }, []);

  return (
    <div className="App">
      <Typography variant="h2" sx={{ marginTop: 8}}>
        Random Quote Generator
      </Typography> 
      <Card>
        <CardContent sx={{ marginTop: 8}}>
          <Typography variant="h5">{quoteText}</Typography>
          <Typography className="margin-top" color="textSecondary">Author: {quoteAuthor}</Typography>
          <Button className="margin-top" sx={{ marginTop: 8}} color="primary" variant="outlined" onClick={getQuotesWithAxios}>Get a new Quote</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
