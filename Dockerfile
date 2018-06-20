FROM node:8

COPY  . /opt/deploy-images

RUN cd /opt/deploy-images && npm install

CMD ["npm", "/opt/deploy-images/server.js" ]