This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Overview
- **Url Preview** project is created as fun little exercise project. checkout [demo](http://deep-link-preview.surge.sh) 
- user can type something in input eg "Check out http://airbnb.com. It's awesome!" & it will show the preview of the url inside the text.
- currently it is using "open graph" (`og:title`, `og:image`, `og:description`) `<meta>` tags (inside html of url) to collect preview information. 


### Known issues (can be fixed)
- we are showing error alert whenever there is some error while fetching preview information from the provided link, this error alert should not be shown
- debouncing experience can be improved.
- currently, a url is considered valid if it is starting from `http|https`, we can change the regular expression to fix this issue.
