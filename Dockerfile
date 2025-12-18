FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
# Nhận quà từ docker-compose gửi sang
ARG VITE_API_KEY
ARG VITE_IMG_URL

# Biến nó thành biến môi trường để lệnh build của Vite nhìn thấy
ENV VITE_API_KEY=$VITE_API_KEY
ENV VITE_IMG_URL=$VITE_IMG_URL
# QUAN TRỌNG
COPY .env ./

COPY . .
RUN npm run build

RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
