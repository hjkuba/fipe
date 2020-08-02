FROM node:14-alpine

COPY . /media/
WORKDIR /media

ARG NEXT_PUBLIC_FIPE_API_URL
ENV NEXT_PUBLIC_FIPE_API_URL=${NEXT_PUBLIC_FIPE_API_URL}

RUN npm install
RUN npm run build

ENTRYPOINT "npm start -- -p ${PORT}"
