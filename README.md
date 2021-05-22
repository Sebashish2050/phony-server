# phony-server

## Prerequisites
Please install git in your system. And clone this repository,
`git clone git@github.com:Sebashish2050/phony-server.git`
## How to run
Please follow below steps to run this server locally.
## Install Homebrew if not present
To check homebrew is present, trpe `brew` in command line and press enter.
### On macOS:
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
### On Linux:
- `git clone https://github.com/Homebrew/brew ~/.linuxbrew/Homebrew`
- `mkdir ~/.linuxbrew/bin`
- `ln -s ~/.linuxbrew/Homebrew/bin/brew ~/.linuxbrew/bin`
- `eval $(~/.linuxbrew/bin/brew shellenv)`
## Download ngrok
### On macOS:
`brew install --cask ngrok`
### On Linux:
- `sudo apt install snapd`
- `sudo snap install ngrok`
## Run setup.sh
This file should be downloaded prior and then run above command
`./setup.sh`

## Install dependencies
`npm i`
## Run server
`npm run dev`

## Run ngrok
`ngrok http 8080`

### Replace config
- ngrok generates https dns (e.g; `https://08f3e9004315.ngrok.io`). Please copy that dns.
- Then go to `config -> default.js`, paste that dns inside `self_host`.
### For ubuntu 
Please create a new user and give privileges as below. After that please replace `username` and `password` inside `config -> default.js`
- `CREATE USER '<new_username>'@'%' IDENTIFIED BY '<your_password>';`;
- `GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON *.* TO '<new_username>'@'%' WITH GRANT OPTION;`