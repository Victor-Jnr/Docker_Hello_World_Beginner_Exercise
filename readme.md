# Build and Create a basic hello world with Docker hosted on localhost

This repository gives you a quick introduction to getting a simple container running on Docker, it has been intended as a beginner exercise.


## Setup

Firstly make sure you have Docker up and running in your system by typing in `docker` in your terminal.

If you get something like the following then your docker is up and running and you can proceed to the next step:
`Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry`....

## Entering the WSL from which we will be executing the following lines of Code:

Open your powershell and type in `wsl`. Press enter you should see something like the following:
`PS C:\WINDOWS\system32> wsl
username@pcname:/mnt/c/WINDOWS/system32$	`

Now locate your folder in which you have saved the Dockerfile using `cd ~` and `cd /mnt/folderpath/Basic_Hello_World_With_Docker/` to get something like this:
`username@pcname:/mnt/c/WINDOWS/system32$ cd ~
username@pcname:~$
username@pcname:~$ cd /mnt/c/folderpath/Basic_Hello_World_With_Docker
username@pcname:/mnt/c/folderpath/Basic_Hello_World_With_Docker$  `

## Building the image and running the container:

To build your image from the Dockerfile type in the following line of code:
`$ docker build -t hello_world . `
To get something like this:
`[+] Building 5.2s (9/9) FINISHED                           docker:default
 => [internal] load build definition from Dockerfile                 0.0s
 => => transferring dockerfile: 133B                                 0.0s
 => [internal] load metadata for docker.io/library/node:4.2          3.0s
 => [auth] library/node:pull token for registry-1.docker.io          0.0s
 => [internal] load .dockerignore                                    0.0s
 => => transferring context: 2B                                      0.0s
 => [internal] load build context                                    0.4s
 => => transferring context: 29.84kB                                 0.3s
 => CACHED [1/3] FROM docker.io/library/node:4.2@sha256:a6...        0.3s
 => => resolve docker.io/library/node:4.2@sha256:a67dfvcx...         0.3s
 => [2/3] COPY . /src                                                0.1s
 => [3/3] RUN cd /src && npm install                                 1.2s
 => exporting to image                                               0.1s
 => => exporting layers                                              0.1s
 => => writing image sha256:00d552a70dfvcx                           0.0s 
 => => naming to docker.io/library/hello_world                             `

Now to run the container, we are going to run the following command:
`$ docker run --rm -it -p 8000:8000 hello_world:latest`
On running the command you should get the following message. (If the system asks for permission to allow Docker to run on port 8000 click on yes):
`Server running at http://localhost:8000`

## Done:

Now just go to `localhost:8000` on your web browser and you should get a screen giving you a hello world message.

## Other useful commands for a beginner:

- Build an Image from a Dockerfile: `docker build -t <image_name>` 
- List the running containers: `docker ps -a`
- List all local images: `docker images`
- Start or stop an existing container: `docker start|stop <container_name> (or <container-id>)`
- View logs for a docker container: `docker logs <container-id>`
- Remove an image: `docker rmi <image-id>`
- Remove a container: `docker rm <container-id>`

