import React, { useEffect, useState } from "react";

const DAD_JOKE_API = 'https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1';

const _getDadJoke = async () => {
  const response = await fetch(DAD_JOKE_API);
  const jsonData = await response.json();
  return jsonData.data.children[0].data;
}

const _updateDadJoke = async (setJoke) => {
  const joke = await _getDadJoke();
  setJoke(joke);
}

const DadJoke = () => {
  const [joke, setJoke] = useState({})

  useEffect(() => {
    console.log('Dadjoke rendered');
    _updateDadJoke(setJoke)
  }, [])

  return (<div className='DadJoke'>
    <p>{joke.title}</p>
    <p>{joke.selftext}</p>
  </div>
  );
}

export default DadJoke;