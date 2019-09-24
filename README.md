# Quote guessing game

A fairly simple game, made using React.

## About the game

As the name suggests, the goal of the game is about quote guessing.
When the game starts, you will be presented with a quote from an unknown source. You will have to guess the person which is quoted. You have a max of 10 attempts.

You have three alternatives:

- Donald Trump - President of the United States

- Kanye West - Rap God (soon to be president of the united states?)

- Ron Swanson - Funny guy from Parks and Recreation

## How it works

The game is built using React.js.

The data is taken from three different free REST API's:

- Donald Trump quotes API: https://whatdoestrumpthink.com/api-docs/index.html

- Kanye West quotes API: https://kanye.rest/

- Ron Swanson quotes API: https://github.com/jamesseanwright/ron-swanson-quotes

### Potential improvements

- Sometimes the API call for a quote does not happen, resulting in the text not being updated. This should either be fixed, or handled in a better way.

- At this moment, you have the possibility to guess multiple times at the same quote, this is obviously not ideal.

  - Buttons should be frozen until new guess.

- Some graphical improvements. Buttons should change color based on which button is correct after guess.

### Potential features

- Highscore board and usernames?

- Possibility to pick poeple to get quotes from? Maybe change dynamically throughout the game.
