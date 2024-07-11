#    This is the Dockerfile that shall pull the image from Docker
#    This is a practice exercise in Docker to create and deploy a container that shall host a hello world on your localhost:8000
#    Made by Ujjwal Kumar


#Sets the base image that has to be pulled from Docker online
FROM node:4.2   
#Copies all the files to the image's filesystem   
COPY . /src     
RUN cd /src && npm install
#Exposes the port of images that will host the hello world
EXPOSE 8000
#Runs the server.js file in the aforementioned node
CMD ["node", "/src/server.js"]
