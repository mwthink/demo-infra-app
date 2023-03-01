FROM docker.io/library/node:18
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json yarn.lock ./
RUN yarn install

# Copy app files
COPY src ./src

CMD ["node", "src"]
