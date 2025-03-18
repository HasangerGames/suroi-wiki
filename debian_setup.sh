#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to install git
install_git() {
    echo "Installing git..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt update
        sudo apt install -y git
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew install git
    else
        echo "Unsupported OS for git installation. Please install git manually."
        exit 1
    fi
}

# Function to install npm
install_npm() {
    echo "Installing Node.js and npm..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt install -y nodejs npm
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew install node
    else
        echo "Unsupported OS for Node.js installation. Please install Node.js and npm manually."
        exit 1
    fi
}

# Function to install pnpm
install_pnpm() {
    echo "Installing pnpm..."
    npm install -g pnpm
}

# Check and install git
if ! command -v git &> /dev/null; then
    install_git
else
    echo "git is already installed."
fi

# Check and install npm
if ! command -v npm &> /dev/null; then
    install_npm
else
    echo "npm is already installed."
fi

# Check and install pnpm
if ! command -v pnpm &> /dev/null; then
    install_pnpm
else
    echo "pnpm is already installed."
fi

# Define the repository URL
REPO_URL="https://github.com/HasangerGames/suroi-wiki.git"

# Clone the repository
echo "Cloning the repository..."
git clone "$REPO_URL"

# Change directory to the cloned repository
cd suroi-wiki || exit

# Initialize and update git submodules
echo "Initializing and updating submodules..."
git submodule init
git submodule update

# Install project dependencies
echo "Installing project dependencies..."
pnpm install

# Set up pre-commit hooks
echo "Setting up pre-commit hooks..."
echo "pnpm lint; pnpm spellcheck" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit

echo "Setup complete! You can now run 'pnpm dev' to start the local development server."
