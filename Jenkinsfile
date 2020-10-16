pipeline {
	agent any
	
	environment {
		SERVICE_NAME = "reactmfe"
		YAML_PATH = "MFE/client/resources/devops/k8s_aws"
		REPOSITORY_TAG="${DOCKERHUB_USERNAME}/${SERVICE_NAME}:latest"
	}
	
	stages {
	
		stage('Git Clone') {
			steps {
					cleanWs()
					git credentialsId: 'GitHub', url: "https://github.com/${ORGANIZATION_NAME}/${SERVICE_NAME}"
				}
		}

			
		stage('Create Docker Image') {
			steps {
					sh "docker image build -t ${REPOSITORY_TAG} ."
				}
		}
			
		stage('Publish Docker Image') {
			steps {
					withCredentials([string(credentialsId: 'DOCKER_PASSEWORD', variable: 'DOCKER_HUB_CREDENTIALS')]) {
						sh "docker login -u yoogesh1983 -p ${DOCKER_HUB_CREDENTIALS}"
					}
            		sh "docker push ${REPOSITORY_TAG}"
            	}
		}

		stage('Deploy to Cluster') {
			environment{
				//traditional kubernetes ingress gatway related variables
				enableKubernetesIngress = "false"
			}

			steps {
				/* Webapp configuration */
				sh "kubectl apply -f ${YAML_PATH}/webapp.yaml"
				sh "kubectl apply -f ${YAML_PATH}/istio-route-webapp.yaml"

				/* Traditional Kubernetes Ingress routing configuration */
				script{
					if (env.enableKubernetesIngress == 'true') {
						sh "kubectl apply -f ${YAML_PATH}/ingress_webapp.yaml"
					}
				}
			}
		}
	}
}
