# I.P-GeoWeather
Node application used to  pinpoint client I.P. address and extract host machine's geolocation and weather using ipapi and Weather API. 

![alt text](https://github.com/navinthenapster/I.P-GeoWeather/blob/master/image.png)

# Prerequisties
1. node.
2. Install the npm packages before executing the code.
```
npm install
```
3. No Proxy : Access to ipapi and api.weather.org in your network.
  > With proxy : insert this code before every API request calls. 
  
```
//WITH PROXY
var username='user';
var password='*';
 var url_option={
   url: url,
   proxy: 'http://'+username+':'+password+'@proxy.company.com:8080'
 };
```
> Not sure if public-ip package can operate on proxy, will inform you in further update.


# How to use:
 * Express Framework : Install the npm packages and execute the file by running this command in your terminal or command prompt.
 
 ``` 
 npm install 
 
 npm run start  
      (or)    
 node server.js
   ```
      
 > The Webpage will be hosted in http://localhost:3000/ .
 
  * http framework : This file deals with the Weather API integration in http WebFramework. It built for testing purpose alone. So run this command to create a http server running in 8081 port.     
          
  ```
  node http_main
  ```
      
   >     The Webpage will be hosted in http://localhost:8081/ .
  
 
  

 
 
# Libraries Used:
* public-ip (is used for finding the public ip of the client.)
* request
* http
* express

# API calls:
* http://ipapi.co/json - to find the geolocation of the ip
* http://api.openweathermap.org/ - to find the weather of that location

**Disclaimer**
   The API KEY will be expired on 4 Jan 2018. Kindly Subscribe to api.openweather to reuse it. The code is done for evalulation purpose, If any problem kindly wait for updates and you can contact me @ navininfantraj@yahoo.co.in
