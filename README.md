# twitter-heart ❤️
NPM Package to twitter heart (Like component)
Link - https://www.npmjs.com/package/twitter-heart
## Here is a quick preview

![Aug-29-2019 22-13-25](https://user-images.githubusercontent.com/13532530/63959653-43aa5c00-caaa-11e9-8f33-1c704bd35f3b.gif)

##Demo link
https://codesandbox.io/s/aged-cloud-cwr0e?fontsize=14

## How to use it?

> This will help you make a single heart component which is like the twitter like


## Installation
```
npm install twitter-heart
```

## Usage
```
import TwitterHeart from 'twitter-heart';
```

### Demo example 
```
<TwitterHeart isLiked onHeartClick={this.heartClicked}>
```

## API

### Props

Name | Type | Description | Default
:--- | :--- | :--- | :---
isLiked | boolean | Hold the current heart status | false
onHeartClick | function | event when heart is clicked | null

