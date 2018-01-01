# I.P-GeoWeather
It will pinpoint your I.P. location  and use the data to extract systems geolocation and weather using ipapi and Weather API. 

# Prerequisties
node
Access to ipapi and api.weather.org in your network

# How to use:
 Express Framework : TO execute the file , run this command in your terminal or command prompt.
     
     npm run start 
      
      (or)
      
      node server.js
      
     The Webpage will be hosted in http://localhost:3000/ .
 
  http framework : This file deals with the Weather API integration in http WebFramework.It build for testing purpose alone.So run this command to create a http server running in 8081 port.

      
      
      
       node http_main
      
     The Webpage will be hosted in http://localhost:8081/ .
  
 
  

 
 
# Libraries Used:
public-ip : is used for finding the public ip of the client.
request
http
express

# API calls:
http://ipapi.co/json - to find the geolocation of the ip
http://api.openweathermap.org/data/2.5/weather - to find the weather of that location

