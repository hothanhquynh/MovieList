<<<<<<< HEAD
#TẠO IMAGE 
FROM node:20-alpine
#Tạo thư mục làm việc app trong container để bỏ source vào
=======
FROM node:20-alpine

>>>>>>> 43cc4c9b81333945836845f388706710433e4835
WORKDIR /app
#COPY package*.json vào app để biết cài thư viện nào trước
COPY package*.json ./
#cài các thư viện dựa vào file package.json vào trong node_modules
RUN npm install

<<<<<<< HEAD
# Nhận key từ docker-compose gửi sang
=======
# Nhận quà từ docker-compose gửi sang
>>>>>>> 43cc4c9b81333945836845f388706710433e4835
ARG VITE_API_KEY
ARG VITE_IMG_URL

# Biến nó thành biến môi trường để lệnh build của Vite nhìn thấy key
ENV VITE_API_KEY=$VITE_API_KEY
ENV VITE_IMG_URL=$VITE_IMG_URL
<<<<<<< HEAD
=======

# XÓA DÒNG COPY .env ./ Ở ĐÂY
>>>>>>> 43cc4c9b81333945836845f388706710433e4835


#copy toàn bộ source vào app
COPY . .
#build chạy bên trong image
RUN npm run build

RUN npm install -g serve
EXPOSE 3000
# khởi động app khi container chạy
#Khởi tạo chương trình serve lưu trong dist, -s là tùy chọn luôn vào Trang chủ nếu bấm nhầm không ra lỗi 404 sau đỏ mở cổng 3000
CMD ["serve", "-s", "dist", "-l", "3000"]