FROM node:16.16
WORKDIR /server/orchestrator
COPY package*.json ./
RUN npm install && npm cache clean –force
ENV PORT=4000
ENV NODE_ENV=production
RUN npm install -g nodemon
COPY ./ ./
CMD ["node","app.js"]