FROM node@21.6.0-alpine

COPY . /app/
WORKDIR /app/
RUN npm install
RUN npm run build

RUN npm install --global serve
CMD ["serve", "-s", "build", "-l", "4001"]