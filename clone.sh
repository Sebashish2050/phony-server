#!/bin/bash
CODE_DIR=~/dev
echo "Creating directory to hold the codebase under $CODE_DIR"
mkdir -p $CODE_DIR

cd $CODE_DIR
echo "Cloning phony-server"
git clone git@github.com:Sebashish2050/phony-server.git

echo "Cloning phony-server"
git clone git@github.com:Sebashish2050/phony-ui.git