#!/bin/bash
set -e

install_brew() {
    echo "Homebrew not found. Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
}

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

if ! command -v brew &> /dev/null; then
    install_brew
else
    echo "Homebrew is already installed."
fi

if ! command -v git &> /dev/null; then
    install_git
else
    echo "git is already installed."
fi

if ! command -v node &> /dev/null; then
    install_node
else
    echo "Node.js and npm are already installed."
fi

if ! command -v pnpm &> /dev/null; then
    install_pnpm
else
    echo "pnpm is already installed."
fi

REPO_URL="https://github.com/HasangerGames/suroi-wiki.git"
echo "Cloning the repository..."
git clone "$REPO_URL"
cd suroi-wiki || exit
echo "Initializing and updating submodules..."
git submodule init
git submodule update
echo "Installing project dependencies..."
pnpm install
echo "Setting up pre-commit hooks..."
echo "pnpm lint; pnpm spellcheck" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
echo "Setup complete! You can now run 'pnpm dev' to start the local development server."
