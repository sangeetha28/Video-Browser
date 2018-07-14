import  React,{Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// you've to enable youtube data API in your account google developer console in order to make a request with the below API Key
const API_KEY="AIzaSyDn5IDqnx5xlN5ewTdqS3atqtJrk3HtPys";



// Class of a App Component -> App variable represents the class->To create an instance we need to use <App  />
// To make a instance wrap with the JSX tags
// Create a new Component, and the component will produce some HTML!
class App extends Component {

   constructor(props) {
       super(props);  // this keyword is not allowed before super
      this.state = {videos: [],selectedVideo: null};
      this.videoSearch('flower')


   }


   videoSearch(term) {
       YTSearch({key:API_KEY, term: term }, videos => {
           // callback function, this is the answer to your question, once the request is completed we are doing setState this causes the app to render and update the video detail
           this.setState({videos}); // when key and prop name is identical you can condense like this
       this.setState({selectedVideo: videos[0]})
   });
   };


   //searchFrequency(term) {
/*      const searchFr = _.debounce(term => {this.videoSearch(term)},300) //Throttling rquest, the debounce new function(returned from the inner function) will be called every 3ms
   }*/

   // Render method renders instanteously it won't wait for anything
    //render function inside a functional component, Div should be the first ome....
    //React component first letter should be a caps letter
   render() {
       const searchFr = _.debounce(term => {this.videoSearch(term)},500);
       return(<div>
       <SearchBar onSearchTermChange={searchFr}/>
       <VideoDetail
       videos={this.state.selectedVideo}
       />
       <VideoList
       //selectedVideo is the another property, here we call the setState// calling setStateagain will render the compon
       //if video list calls this function the function will update the App state
       // curly braces won't return anything unless there is a return statement
       onVideoSelect={selectedVideo => this.setState({selectedVideo})}
       videos={this.state.videos}
       />
       </div>);
   };

}


// we are using videos props to pass it to the video component

// when using functional component we use props.

// When using class component we use this.props


//We use React Dom libaray as we render the component to the React Dom

// We are rendering a App component into a Container div elemenet

// Render Targets ....

ReactDom.render(<App />, document.querySelector('.container'));