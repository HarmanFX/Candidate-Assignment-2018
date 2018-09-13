# Candidate-Assignment-2018
Homework for HARMAN X, FX Team - Candidate Interviews (2018)

## The Premise
You're working on a system that needs to know when a hand is present in order to raise up a platform. You have been given a proximity sensor that is able to detect how far away a physical object is from it. Using this sensor, you'll need to write an algorithm that sends a command to the platform once it is sure that a hand has been detected, and another command to lower once the hand has disappeared for three seconds.

## Additional Information
- Use the 'sensorUpdate' callback to receive the proximity value
- Call 'extendPlatform' to raise the platform and 'retractPlatform' to retract it
- We've included a section to add your code, but feel free to place it elsewhere if you feel it's more appropriate

## Getting Started
We've included a web interface that will simulate the interaction between the hand, sensor, and platform. This is accessible through the included node server.

### Installing Node and Dependencies
#### Mac/Linux
- Use brew to install node (more verbose guide) [http://blog.teamtreehouse.com/install-node-js-npm-mac]
  - If you don't have brew, install with:
    - $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  - $ brew install node
- We're using only one dependency in this project, Socket.io
  - In the root directory of this project:
    - $ npm install
- If everything has install correctly the application can be launched with:
  - $ node app.js
  - To view the GUI in your browsers, navigate to: localhost:4200

## What we're looking for
This exercise is indicative of a typical challenge the FX Team would have when working on a system during one of our sprints. We're looking for a solution that ensures all edge cases are accounted for, and is able to run without errors. Good luck, and have fun! :)
