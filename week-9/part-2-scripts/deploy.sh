#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin

cd assignments/week-9
 git pull origin main
 cd server
 /home/ubuntu/.nvm/versions/node/v20.5.1/bin/pm2 kill
 /home/ubuntu/.nvm/versions/node/v20.5.1/bin/pm2 start index.js
