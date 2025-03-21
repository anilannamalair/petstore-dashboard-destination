pipeline {
    agent any

    environment {
        // Define any environment variables here
        NODE_VERSION = '16.x'
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    // Install Node.js
                    sh 'curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | bash -'
                    sh 'apt-get install -y nodejs'

                    // Verify Node.js and npm installation
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Lint') {
            steps {
                script {
                    sh 'npm run lint'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploy stage - customize as needed'
                    // Add your deployment steps here
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Cleaning up...'
                // Clean up after the build
                sh 'rm -rf node_modules'
            }
        }
        success {
            script {
                echo 'Build succeeded!'
            }
        }
        failure {
            script {
                echo 'Build failed!'
            }
        }
    }
}
