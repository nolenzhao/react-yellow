
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Titlecard from './Titlecard'

import maskhead from './assets/images/maskhead.png'
import jakescream from './assets/images/maskscream.png'
import camoshirt1 from './assets/images/camoshirt1.png'
import camoshirt2 from './assets/images/camoshirt2.png'
import totebag1 from './assets/images/totebag1.png'
import camoshirttan from './assets/images/Camo-shirt-tan.png'
import totebag2 from './assets/images/totebag2.png'
import logo from './assets/images/Yellowlogo.png'
const Home = () =>
{
  let previewsimage_arr = [jakescream,maskhead, camoshirt1, camoshirt2, totebag1, camoshirttan,totebag2]
  let previews_arr = [];
  let imageclassnames = [];
  for(let i = 0; i < 10; i++)
  {
    imageclassnames.push('previewimage' + i);
    previews_arr.push(<img src = {previewsimage_arr[i]} className = "previewimage" id = {imageclassnames[i]}/>)
    
  }


  return (
    <div className="homecontent">
      <Titlecard title = "YELLOW VANCOUVER"/>
      
      {previews_arr}
      <div className = "previewimage" id = "previewlogo">
        <h1>YELLOW VANCOUVER </h1>
      </div>
      <div className = "previewimage" id = "previewspacer">

      </div>
   
    </div>
    
  );
}

export default Home;
