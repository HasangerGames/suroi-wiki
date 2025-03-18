#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to install git
install_git() {
    echo "Installing git..."
    if command -v apt &> /dev/null; then
        sudo apt update
        sudo apt install -y git
    elif command -v dnf &> /dev/null; then
        sudo dnf install -y git
    elif command -v pacman &> /dev/null; then
        sudo pacman -S --noconfirm git
    elif command -v yum &> /dev/null; then
        sudo yum install -y git
    elif command -v zypper &> /dev/null; then
        sudo zypper install -y git
    elif command -v brew &> /dev/null; then
        brew install git
    else
        echo "Unsupported OS for git installation. Please install git manually."
        exit 1
    fi
}

# Function to install Node.js and npm
install_node() {
    echo "Installing Node.js and npm..."
    if command -v apt &> /dev/null; then
        sudo apt install -y nodejs npm
    elif command -v dnf &> /dev/null; then
        sudo dnf install -y nodejs npm
    elif command -v pacman &> /dev/null; then
        sudo pacman -S --noconfirm nodejs npm
    elif command -v yum &> /dev/null; then
        sudo yum install -y nodejs npm
    elif command -v zypper &> /dev/null; then
        sudo zypper install -y nodejs npm
    elif command -v brew &> /dev/null; then
        brew install node
    else
        echo "Unsupported OS for Node.js installation. Please install Node.js and npm manually."
        exit 1
    fi
}

# Function to install pnpm
install_pnpm() {
    echo "Installing pnpm..."
    if ! npm install -g pnpm; then
        echo "Failed to install pnpm. You may need to run the command with elevated permissions."
        echo "Try running the following command:"
        echo "sudo npm install -g pnpm"
        echo "Alternatively, you can change npm's global directory to avoid permission issues."
        echo "Run the following commands:"
        echo "mkdir -p \$HOME/.npm-global"
        echo "npm config set prefix '\$HOME/.npm-global'"
        echo "export PATH=\"\$HOME/.npm-global/bin:\$PATH\""
        echo "Then add the above export command to your shell configuration file (e.g., ~/.bashrc or ~/.zshrc)."
        exit 1
    fi
}

# Check and install git
if ! command -v git &> /dev/null; then
    install_git
else
    echo "git is already installed."
fi

# Check and install Node.js and npm
if ! command -v node &> /dev/null; then
    install_node
else
    echo "Node.js and npm are already installed."
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
