# Use an official node image as a base
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files and build
COPY . . 
RUN npm run build

# Debugging: List files in the /app directory to verify the build
RUN ls /app

# Use a lightweight web server to serve static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]