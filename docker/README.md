## Installation
- Install [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
- Make a file name Dockerfile ```touch Dockerfile```

### Flask App [Dockerfile](/docker/python/Dockerfile)
```sh
FROM python:3.8-alpine

RUN apk add --no-cache python3-dev \
    && pip3 install --upgrade pip

WORKDIR /src

COPY . .

RUN pip install -r requirements.txt                                                                            

EXPOSE 5000

ENTRYPOINT  ["python3"]

CMD ["app.py"]
```
### React App [Dockerfile](/docker/python/Dockerfile)
```sh
# base image
FROM node:12.13.0-alpine

# set working directory
WORKDIR /src

# add `/app/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.1.1 -g --silent

# start app
CMD ["npm", "start"]
```
### Instruction
- `docker build -t name .`
- `docker run --name name -d -p port:port name` or
- `docker run --name name -d -p port:port --network host name` 
