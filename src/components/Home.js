
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Titlecard from './Titlecard'


import YellowBenBag from './assets/images/YellowBenBag.JPG'
import YellowBenHats from './assets/images/YellowBenHats.JPG'
import YellowColeRing from './assets/images/YellowColeRing.jpg'
import YellowGeorgeBack from './assets/images/YellowGeorgeBack.jpg'
import YellowGlassesMask from './assets/images/YellowGlassesMask.JPG'
import YellowJackBack from './assets/images/YellowJackBack.JPG'
import YellowParkerFlower from './assets/images/YellowParkerFlower.jpg'
import YellowParkerSpit from './assets/images/YellowParkerSpit.JPG'
import YellowSeversBack from './assets/images/YellowSeversBack.JPG'
import YellowGeorgeSpill from './assets/images/YellowGeorgeSpill.JPG'
import YellowJasonJeans from './assets/images/YellowJasonJeans.JPG'
import YellowBothSweaters from './assets/images/YellowBothSweaters.JPG'
import YellowJasonFlannel from './assets/images/YellowJasonFlannel.JPG'
import YellowToteBag from './assets/images/YellowToteBag.JPG'
import YellowColeConnor from './assets/images/YellowColeConnor.JPG'

import logo from './assets/images/Yellowlogo.png'
const Home = () =>
{
  let previewsimage_arr = [YellowJasonFlannel,YellowParkerSpit, YellowBenBag, YellowJackBack, YellowColeConnor, YellowGeorgeSpill, YellowSeversBack
  , YellowGeorgeBack, YellowParkerFlower,YellowBenHats, YellowColeRing, YellowGlassesMask,YellowBothSweaters, ]
  let previews_arr = [];
  let imageclassnames = [];
  for(let i = 0; i < 15; i++)
  {
    imageclassnames.push('previewimage' + i);
    previews_arr.push(<img src = {previewsimage_arr[i]} className = "previewimage" id = {imageclassnames[i]}/>)
    
  }


  return (
    <div className="homecontent">
      <Titlecard title = "YELLOW VANCOUVER"/>
      
      {previews_arr}
      <div className = "previewimage" >
        <h1 id = "previewlogo">YELLOW VANCOUVER </h1>
      </div>
      <div className = "previewimage" id = "previewspacer">

      </div>
   
    </div>
    
  );
}

export default Home;
