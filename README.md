# phony-server
## How to run
Please follow below steps to run this server locally...
## Install Homebrew if not present
To check homebrew is present, trpe `brew` in command line and press enter.
### On macOS:
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
### On Linux:
- `sudo apt-get install build-essential procps curl file git`
- `git clone https://github.com/Homebrew/brew ~/.linuxbrew/Homebrew`
- `mkdir ~/.linuxbrew/bin`
- `ln -s ~/.linuxbrew/Homebrew/bin/brew ~/.linuxbrew/bin`
- `eval $(~/.linuxbrew/bin/brew shellenv)`
## Run clone.sh
`./clone.sh`
## Run setup.sh
`./setup.sh`
## Install dependencies
`npm i`
## Run server
`npm run dev`