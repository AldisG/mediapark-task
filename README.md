### `Starting`
Pull the project, CD into it,
initially it will be on branch 'master', so use command..
git checkout develop
Then run 'npm start' in the terminal

### `To make API call successful`
You will have to create a '.env. file in root location and create a variable:
`REACT_APP_ACCESS_KEY='your api access key'`
Or... you can paste it in page, where the Question icon is located (upper right corner)

For some reason SuggestSearchQueries dont work properly, so I couldnt add in time text change on suggestion click functionality, but everything else works

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.