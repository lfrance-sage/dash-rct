
import NavigationBar from "carbon-react/lib/components/navigation-bar";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import "carbon-react/lib/style/fonts.css";
import React from "react";
import './Graphs.css'



const Graphs = () => {
    return (
       <CarbonProvider  theme={sageTheme}>
        <GlobalStyle />
     
        <NavigationBar navigationType="black">Sage.com Dashboard</NavigationBar>
        <h1>End User Metrics:</h1>
       
  <div className="row1">
    <iframe
      className="iframe1"
      scrolling="no" 
      frameBorder=""
      src="https://chart-embed.service.newrelic.com/herald/b27e379c-4b38-4597-86d7-bbfcdd92ab63?height=250px&timepicker=true&width=250px"
    ></iframe>
    <iframe
      className="iframe2"
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/b8dac0c0-53f3-4e50-8953-a8d4e8fcae24?height=250px&timepicker=true&width=250px"
    ></iframe>
    <iframe
      className="iframe3"
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/59d72019-a0d9-4b89-8138-bad90933b473?height=250px&timepicker=true&width=250px"
    ></iframe>
    <iframe
      className="iframe4"
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/c86005ff-2cc5-416f-a506-c594eac25b98?height=250px&timepicker=true&width=250px"
    ></iframe>
    <iframe
      className="iframe5"
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/ed6f06f6-a797-40fc-af15-def2159bfe5a?height=250px&timepicker=true&width=250px"
    ></iframe>
    <iframe
      className="iframe6"
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/3af70ae3-567f-477c-b5e8-9efa5faf7e21?height=250px&timepicker=true&width=350px"
    ></iframe>
  </div>
  <h1>Sage.com Metrics:</h1>
  <div className="row2">
    <iframe
      className="iframe1"
      scrolling="no" 
      frameBorder=""
      src="https://chart-embed.service.newrelic.com/herald/e64c6100-17a6-45f5-ba50-e24e6b7a5f99?height=300px&timepicker=true&width=650px"
    ></iframe>
        <iframe
      className="iframe1"
      scrolling="no" 
      frameBorder=""
      src="https://chart-embed.service.newrelic.com/herald/33b62a24-2905-4b21-b850-9c9faf4cdb0f?height=300px&timepicker=truewidth=650px"
    ></iframe>
    <iframe
      className="iframe2"
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/c5e988ce-20c9-4b2d-b662-06cc5eceef56?height=300px&timepicker=true"
    ></iframe>
  </div>
  
  <div className="row3">
    <iframe
      className="iframe1"
      scrolling="no" 
      frameBorder=""
      src="https://chart-embed.service.newrelic.com/herald/e64c6100-17a6-45f5-ba50-e24e6b7a5f99?height=400px&timepicker=true&width=650px"
    ></iframe>
        <iframe
      className="iframe1"
      scrolling="no" 
      frameBorder=""
      src="https://chart-embed.service.newrelic.com/herald/e64c6100-17a6-45f5-ba50-e24e6b7a5f99?height=400px&timepicker=true&width=650px"
    ></iframe>
    <iframe
      className="iframe2"
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/c5e988ce-20c9-4b2d-b662-06cc5eceef56?height=400px&timepicker=true"
    ></iframe>
  </div>
  <div className="row3">
    <iframe
      className="iframe1"
      scrolling="no" 
      frameBorder=""
      src="https://chart-embed.service.newrelic.com/herald/e64c6100-17a6-45f5-ba50-e24e6b7a5f99?height=400px&timepicker=true&width=650px"
    ></iframe>
        <iframe
      className="iframe1"
      scrolling="no" 
      frameBorder=""
      src="https://chart-embed.service.newrelic.com/herald/e64c6100-17a6-45f5-ba50-e24e6b7a5f99?height=400px&timepicker=true&width=650px"
    ></iframe>
    <iframe
      className="iframe2"
      scrolling="no"
      frameBorder="0"
      src="https://chart-embed.service.newrelic.com/herald/c5e988ce-20c9-4b2d-b662-06cc5eceef56?height=400px&timepicker=true"
    ></iframe>
  </div>
  
  

     </CarbonProvider> 
    )
}

export default Graphs

  
   