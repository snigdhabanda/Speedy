
# Speedy

# Background

With rideshare becoming cost-prohibitive, Speedy aims to use superior tech to get passengers to their destinations faster and lower the cost of rides. Speedy must rely on the prowess of its drivers, and is inviting you to test drive as one! 

Your goal is to drop off a passenger before time runs out. Optimal routes are pre-computed via pathfinding algorithms, and you win a round if your chosen path mirrors an optimal one. As you level up, you will encounter traffic congestion and hazardous weather conditions. 

Speed is played using the four arrow keys. The game begins upon click, and you are playing to beat the clock. In certain levels, you will encounter new challenges and more elaborate asks. 

# Functionality & MVPs

In Speedy: 

- You will navigate using arrow keys within the bounds of a map
- You will pick up a passenger and navigate to an endpoint 
- A clock will tick 
- Algorithmically computed optimal paths will be revealed to you with labels 
- Similarity between your path and an optimal path will be computed
- Levels 2 and 3 will include traffic congestion and bad weather patterns
- A score will be computed at the bottom based on your chosen route 

# Wireframes

- Nav links include links to this project’s Github repo and my LinkedIn
- Timer will start once player clicks
- Instructions will display from the top right corner
- Score will be computed and accumulated over levels at the bottom 

<img width="772" alt="Speedy Wireframe" src="https://user-images.githubusercontent.com/78869659/136586023-271bc9ad-409b-4476-bbdd-134b996fc15c.png">

# Technologies, Libraries, APIs

- The Canvas API will be used to overlay a grid on a map
- A mock of a static map (sans API key) from MapBox will be the background template
- Webpack and Babel will bundle and transpile the source Javascript code
- HTML5 and CSS to render the buttons outside of the board
- Npm to manage project dependencies 
- Web Audio API (bonus)

# Bonus Features

- Background sounds during play and at outcomes
- Responsiveness 
- Pick up more than one player 

# Implementation Timeline

Thursday: Submit initial and final proposals. Set up project and Git repo. Display layout of buttons and map using JS, HTML, and CSS. 

Friday: Dedicate this day to researching and implementing path finding algorithms. By the end of the day, a player should be able to traverse the map and see precomputed optimal paths. The threshold required to level up should also be implemented. The visual display of the map and surrounding buttons should be complete by the end of the day. 

Weekend: Finish up Friday’s work and refactor non-optimal code. Polish the UI (use an API for the grid if needed (ie. if navigating around a static photo is less visually appealing)). Adjust game thresholds to make it harder/easier. 

Monday: Add arrow key functionality and incorporate obstacles into levels 2 and 3. Create an instructions guide that appears upon start. 

Tuesday: Add bonus features (ie. sound, 3D icons for cars) as well as additional pathfinding algorithms (possibly create a new algorithm). 

Wednesday: Dedicate this day to finishing styling. Possibly add a description of pathfinding algorithms (ie. an instructional guide) to the bottom of the game. 

