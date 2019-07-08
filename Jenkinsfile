pipeline {
  stages {
    stage('Build') {
      steps {
        container('gradle') {
          sh """
            gradle clean bootJar
          """
        }
      }
    }
  }
}