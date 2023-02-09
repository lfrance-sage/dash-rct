import Box from "carbon-react/lib/components/box";
import Button from "carbon-react/lib/components/button";
import Typography from "carbon-react/lib/components/typography";
import NavigationBar from "carbon-react/lib/components/navigation-bar";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import "carbon-react/lib/style/fonts.css";
import Tile from "carbon-react/lib/components/tile";
import TileFooter from "carbon-react/lib/components/tile/tile-footer";
import { css } from "styled-components";
import React from "react";
import './Graphs.css'



const Graphs = () => {
    return (
       <CarbonProvider  theme={sageTheme}>
        <GlobalStyle />
        <NavigationBar navigationType="black">Sage.com Dashboard</NavigationBar>
      <div className="graph1">
      <iframe
      color="black" width='1600px' 
      scrolling="no"
      frameBorder="0"
      height="550px"  src="https://chart-embed.service.newrelic.com/herald/e0093782-42ed-4e52-8241-3e178813d0b9?height=500px&timepicker=true" >      
      </iframe>
      <iframe 
      color="black" width='250px' height="340px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/f99a2b3e-856d-43f8-9daa-f6698280d569?height=300px&timepicker=true" ></iframe>
      </div>




      <div className="graph2">
 
      <iframe
      color="black" width='1500px' 
      scrolling="no"
      frameBorder="0"
      height="420px" src="https://chart-embed.service.newrelic.com/herald/5194fd44-1018-47d2-982b-9d98c5f04ffc?height=400px&timepicker=true" >
      </iframe>


      <iframe
      color="black" width='1500px' 
      scrolling="no"
      frameBorder="0"
      height="420px" src="https://chart-embed.service.newrelic.com/herald/0220ee9f-c154-48d6-85a5-8cb036ae9431?height=400px&timepicker=true" >
      </iframe>

    
      <iframe
      color="black" width='1500px' 
      scrolling="no"
      frameBorder="0"
      height="420px" src="https://chart-embed.service.newrelic.com/herald/a567ebfd-057d-423c-ab20-b2c3f1723af9?height=400px&timepicker=true" >
      </iframe>
      </div>

    <div className="smallgraph">     
      
      
     
      <iframe 
      color="black" width='500px' height="300px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/f196a5ed-c598-4d13-89b2-48c1a9c7c56f?height=300px&timepicker=true" ></iframe>

      
      <iframe 
      color="black" width='500px' height="300px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/0f1da5c3-85ff-471b-90a4-fe20d18e2cf4?height=300px&timepicker=true" ></iframe>

      <iframe 
      color="black" width='500px' height="300px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/fbeb10b4-b5a8-4abb-ad7c-3ba53c96ef90?height=300px&timepicker=true" ></iframe>

      
      

      </div>
      
      <div className="graph2">
 
 <iframe
 color="black" width='1500px' 
 scrolling="no"
 frameBorder="0"
 height="420px" src="https://chart-embed.service.newrelic.com/herald/4e1f9b4f-c7a8-4b50-a6c9-91b8af49dd41?height=400px&timepicker=true" >
 </iframe>


 <iframe
 color="black" width='1500px' 
 scrolling="no"
 frameBorder="0"
 height="420px" src="https://chart-embed.service.newrelic.com/herald/aee92607-2acf-420b-b25d-a6ab9164a578?height=400px&timepicker=true" >
 </iframe>


 <iframe
 color="black" width='1500px' 
 scrolling="no"
 frameBorder="0"
 height="420px" src="https://chart-embed.service.newrelic.com/herald/710d52ed-96d9-46a2-8abf-5091f2bc6f39?height=400px&timepicker=true" >
 </iframe>
 </div>
  


      <div className="smallgraph2">
      <iframe 
      color="black" width='300px' height="325px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/e680313c-f31e-4b05-bcce-2f3fdf363a64?height=400px&timepicker=true" ></iframe>
      <iframe 
      color="black" width='300px' height="325px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/60a65969-9018-4414-8154-e6b6c2a5e090?height=450px&timepicker=true" ></iframe>
      
      <iframe 
      color="black" width='300px' height="300px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/cd7b1c5d-2e01-428b-af55-6ba742966702?height=400px&timepicker=true" ></iframe>
      
      <iframe 
      color="black" width='500px' height="400px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/f4751f8e-bd44-425c-bc46-0f209c9e4092?height=400px&timepicker=true" ></iframe>
      
      <iframe 
      color="black" width='600px' height="300px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/a7dcab74-e4ba-45b9-a937-899716fc069d?height=600px&timepicker=true" ></iframe>
      
      
    
      
      
      </div>
    

  
      <div className="rdsgraph">
      
      <iframe
      color="black" width='1900px' 
      scrolling="no"
      frameBorder="0"
      height="550px"  src="https://chart-embed.service.newrelic.com/herald/ec069eab-38f2-47f2-8098-93f3be362f42?height=500px&timepicker=true" >
            
      </iframe>
      </div>
     </CarbonProvider> 
    )
}

export default Graphs

  
   