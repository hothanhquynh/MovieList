FROM node:20-alpine
WORKDIR /app
#lưu các file package vào app
COPY package*.json ./ 
#cài lại thư viện cần thiết
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm" , "start"]