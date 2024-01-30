pipeline {
    agent any

    stages {
        stage('SSH to Windows Server') {
            steps {
                script {
                
                    sh """
                        ssh -v ${params.remoteUser}@${params.remoteServer}
                    """
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace after the build
            cleanWs()
        }
    }
}

