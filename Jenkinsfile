pipeline {
    agent any
    stages {
        stage('mountapp') {
            agent {
                docker {
                    image 'rogerarce/nodedev:latest'
                    args '-v ${PWD}:/app'
                }
            }
            steps { 
                sh 'yarn install'
            }
        }
        stage('test') {
            steps {
                sh 'yarn install'
            }
        }
    }
}
