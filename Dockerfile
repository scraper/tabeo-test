FROM node:14.18.1-buster-slim

WORKDIR /usr/src/app

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
      apt-transport-https \
      build-essential \
      ca-certificates \
      chrpath \
      fonts-liberation \
      libasound2 \
      libatk-bridge2.0-0 \
      libatk1.0-0 \
      libatspi2.0-0 \
      libcups2 \
      libdbus-1-3 \
      libdrm2 \
      libgbm1 \
      libgtk-3-0 \
      libnspr4 \
      libnss3 \
      libxcomposite1 \
      libxdamage1 \
      libxfixes3 \
      libxkbcommon0 \
      libxrandr2 \
      curl
RUN rm -f /etc/apt/sources.list.d/*.list
RUN apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false

COPY package*.json ./

RUN npm ci && npx playwright install

COPY . .

CMD ["npm", "run", "test:headless"]
