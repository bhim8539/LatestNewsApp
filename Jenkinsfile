pipeline {
    agent any

    stages {
        stage('SSH to Windows Server') {
            when {
                expression {
                    // Check the value of the parameter to decide whether to execute the stage
                    return params.ENABLE_WINDOWS_STAGE == 'true'
                }
            }
            steps {
                script {
                
                    sh """
                        ssh -v ${params.remoteUser}@${params.remoteServer}
                    """
                }
            }
        }
        stage('Print Hello') {
            when {
                expression {
                    // Check the value of the parameter to decide whether to execute the stage
                    return params.ENABLE_HELLO_STAGE == 'true'
                }
            }
            steps {
                script {
                  sh 'echo Hello Friend'
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

