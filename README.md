# ApplitoolsHackaton
Applitools Hackaton Code. **It uses WebDriverIO version 5**.

## Instructions:

* To install the dependencies, execute: 
    > ```npm install```

* To run all the tests, execute:
  >  ```npm test```

* To run just the Applitools tests, execute:
  >  ```npm run test:visual```

* To run just the traditional tests, execute:
  >  ```npm run test:traditional```

## Suggestions and Feedbacks for Applitools:
* There are different documentations about how to use Applitools with WebDriverIO. These differences between them can make us confuse sometimes of which one is better and  more simple to integrate. For example, that is a WebDriverIO Service to integrate, there is the documentation in the Applitools site, and also the instructions in the course on Test Automation University. I suggest take a look on those different resources to make more clear which is better for someone starting with Applitools, and make it easier the adoption when the professional want to use WebDriverIO;

* There are 2 different Applitools libraries in NPM. Notice below, that one of them has '-' and the other '.'. :
    * @applitools/eyes-webdriverio
    * @applitools/eyes.webdriverio
* In the tutorial on Applitools WebSite (https://applitools.com/tutorials/webdriverio5.html#_1-install-the-eyes-sdk), there is the below instruction. The second command doesn't work. Actually, it works just for the library with '-' in the name:
>1- Install the Eyes SDK  
>npm install @applitools/eyes-selenium@^4.31.9 --save-dev    
>npm install @applitools/eyes.webdriverio@^5.8.1 --save-dev <


* I saw other tutorials using the other library too. My suggestion it is to take a look on this libraries to decide which one is the standard, to not misguide the users;

* I decided to use the Applitools service embedded in WebdriverIO configuration (https://webdriver.io/docs/applitools-service.html). This service is the easier to use Applitools with WebDriverIO, and I was able to configure it very fast, however, this service still have many limitations, like for example, configuring batches properly, and setting match level. My suggestion for Applitools team is to take a look on this integration service, and make the necessary improvements. It will be a win-win situation for the clients/users and for Applitools; (I have been considering to contribute to this reporistory too when I finish this challenge, once it is a public repository, open for contributions)

* Keep up the good work and congratulations for this hackaton initiative!! :smiley: