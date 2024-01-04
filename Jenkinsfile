pipeline {
  agent docker {
    image 'node:20-slim'
  }

  stages {
    stage('Setup pnpm') {
      steps {
        sh 'corepack enable'
        sh 'corepack prepare --activate pnpm@8'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'pnpm i'
      }
    }

    stage('Check spelling') {
      steps {
        sh 'pnpm spellcheck'
      }
    }

    stage('Build') {
      steps {
        sh 'pnpm build'
      }
    }
  }
}