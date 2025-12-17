FROM node:20-alpine
WORKDIR /app

# THÊM DÒNG NÀY (BẮT BUỘC)
ARG VITE_API_KEY
ARG VITE_IMG_URL
ENV VITE_API_KEY=$VITE_API_KEY
ENV VITE_IMG_URL=$VITE_IMG_URL

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]