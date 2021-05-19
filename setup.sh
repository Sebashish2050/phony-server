#!/bin/bash
echo "Installing dependencies..."
brew install node mysql

echo "Installing nodemon..."
npm i -g nodemon

echo "Running mysql"
brew services start mysql
echo "*** You will be prompted for a password, please use 'Mysql@123' as password by selecting 2 as strong password ***"
echo "*** Press `Y` for all other options ***"
mysql_secure_installation
echo "Stopping mysql"
brew services stop mysql
echo "Restarting mysql with deamon mode"
mysql.server start

# remove the tracking database if you have a previous db setup
echo "Delete the cloudphony database if it already exists..."
mysql -u root --password=Mysql@123 -e 'DROP DATABASE cloudphony'

# recreate the tracking database
echo "Create the tracking database..."
mysql -u root --password=Mysql@123 -e 'CREATE DATABASE cloudphony'
