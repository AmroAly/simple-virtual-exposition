#!/bin/bash

# installing front end dependencies

sudo apt-get update
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -

yes | sudo apt-get install -y build-essential nodejs
sudo apt-get update

cd /var/www/myproject/frontend
npm install
npm run build
npm run build

sudo /bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=1024
sudo /sbin/mkswap /var/swap.1
sudo /sbin/swapon /var/swap.1
sudo a2dissite 000-default.conf


# installing apache2
cd ~
sudo apt-get update
sudo apt-get install -y apache2

echo "ServerName localhost" | sudo tee /etc/apache2/conf-enabled/servername.conf
sudo a2enconf servername


sudo a2dissite 000-default.conf
sudo cp /tmp/002-talented.conf /etc/apache2/sites-available
sudo a2ensite  002-talented.conf
sudo service apache2 restart
sudo a2enmod rewrite
sudo service apache2 restart
