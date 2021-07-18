# What is the Application about? </br>
- This is a <b>Server-side-rendered</b> React Application that uses <b>REDUX</b> as a State Management tool </br>
- This application creates chunks of js and css files when compile </br>
- Unlike YMSContact_SSR , You can use your own css styles here. You can also use third party css library like Bootstrap here, but for that you need to pass css via Index.js under "init" folder (which is done here) and may get issue when try to use via ClientSide i.e. from Entry_Client.js (Which you could do in YMSContact_SSR) </br>

# How to run the Application? </br>
> npm install </br>
> npm run dev </br>
> if first time, close the server by using ctrl+C and do "npm run dev" again(Since css will not update first time. Bug!!) </br>

The application can now be browsed at http://localhost:3000/ </br>

if not run successfully, You may need to do the following installation</br>

> npm install phantomjs-prebuilt@2.1.16 --ignore-scripts </br>
> npm install npm-run-all --save-dev </br>
> npm install -g nodemon </br>

Below are the files those could not be upgraded to a newer versions: <br>
<pre>
"mini-css-extract-plugin": "0.5.0",
"postcss-import": "12.0.1",
"postcss-loader": "3.0.0",
"react-router": "4.3.1",
"react-router-config": "1.0.0-beta.4",
"react-router-dom": "^4.3.1",
"webpack-assets-manifest": "4.0.6",
"webpack-cli": "3.2.3",
"css-loader": "^2.1.0",
</pre>


