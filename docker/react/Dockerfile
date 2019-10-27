# base image
FROM node:12.13.0

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