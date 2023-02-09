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
      color="black" width='250px' height="480px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/76bea883-736b-4f63-974b-f9f3504f2250?height=400px&timepicker=true" ></iframe>
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
      color="black" width='500px' height="420px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/549ff47a-0480-44b2-8618-c92e90757903?height=400px&timepicker=true" ></iframe>

      
      <iframe 
      color="black" width='500px' height="420px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/fb1bc486-c15c-45d5-8756-ee411bf4dfcc?height=400px&timepicker=true" ></iframe>

      <iframe 
      color="black" width='500px' height="420px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/d60553fd-c40a-4217-b034-7d0917f67409?height=400px&timepicker=true" ></iframe>

      
      

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
      src="https://chart-embed.service.newrelic.com/herald/de25d6a7-50e1-4d79-a87a-8a1b69fc553a?height=400px&timepicker=true" ></iframe>
      <iframe 
      color="black" width='300px' height="325px" 
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/1062cda1-f957-4b36-a340-2fa515752b27?height=400px&timepicker=true" ></iframe>
      
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

  
   