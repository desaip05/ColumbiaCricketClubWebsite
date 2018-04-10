How to run:

npm run react-dev
npm run server-dev

Using following libraries:

React Table: https://react-table.js.org/#/story/readme

npm install <package_name> --save-dev



cd /Users/Parikshit-Intellify/Documents/C/MyFiles/AWS instance

ssh -i "instance1_061317.pem" ec2-user@ec2-34-203-115-193.compute-1.amazonaws.com

scp -i /Users/Parikshit-Intellify/Documents/C/MyFiles/AWS-instance/instance1_061317.pem /Users/Parikshit-Intellify/Sites/PersonalGit/ColumbiaCricketClubWebsite/CCC-web.zip ec2-user@ec2-34-203-115-193.compute-1.amazonaws.com:~/.

mv CCC-web.zip /var/www/html/

AWS:

sudo yum install <package_name>

Check running processes:

netstat -tuplen



Reverse proxy/Port forwarding on AWS:

https://eladnava.com/binding-nodejs-port-80-using-nginx/

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04

https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-web-server-and-reverse-proxy-for-apache-on-one-ubuntu-16-04-server

server {
    listen 80;
    server_name parikshitdesai.com;

    location /ccc {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://127.0.0.1:6900";
    }
}


sudo vi /etc/nginx/sites-available/node

sudo service nginx restart

Using PM2:

https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps


***
https://stackoverflow.com/questions/39754435/nginx-proxy-to-remote-node-js-express-app-in-subdirectory