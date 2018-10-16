pipeline {
    agent any
    stages {
        stage('test') {
            agent {
                docker {
                    image 'rogerarce/nodedev:latest'
                    args '-v ${PWD}:/app'
                }
            }
            steps { 
                sh 'yarn install'
                sh 'yarn test'
            }
            post {
                always {
                    junit 'output/coverage/junit/junit.xml'
                }
            }
        }
    }
}
