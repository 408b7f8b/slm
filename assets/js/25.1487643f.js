(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{336:function(t,e,s){"use strict";s.r(e);var a=s(15),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"clusters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clusters"}},[t._v("#")]),t._v(" Clusters")]),t._v(" "),e("p",[t._v("The Service Lifecycle Management enables the "),e("a",{attrs:{href:"#install-new-clusters"}},[t._v("installation of new clusters")]),t._v(" and the integration of "),e("a",{attrs:{href:"#add-managed-clusters"}},[t._v("existing clusters (managed clusters)")]),t._v(". To deploy a service offering into a cluster, the corresponding deployment capability must have the deployment type of the service offering defined in the property "),e("code",[t._v("supportedDeploymentTypes")]),t._v("(see section "),e("RouterLink",{attrs:{to:"/docs/usage/capabilities/#deployment-capabilities"}},[t._v("Deployment Capabilites")]),t._v(" for details).")],1),t._v(" "),e("h2",{attrs:{id:"install-new-clusters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-new-clusters"}},[t._v("#")]),t._v(" Install new clusters")]),t._v(" "),e("p",[t._v("A corresponding cluster deployment capability must be available to allow the installation of a new cluster. That deployment capability must have an "),e("code",[t._v("INSTALL")]),t._v(" action and a definition for "),e("code",[t._v("clusterMemberTypes")]),t._v(".\n"),e("br"),e("br"),t._v("\nExample from the "),e("a",{attrs:{href:"https://github.com/FabOS-AI/fabos-slm-dc-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("official K8S deployment capability"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"actions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"INSTALL"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"capabilityActionClass"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AwxCapabilityAction"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"capabilityActionType"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INSTALL"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"awxRepo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/FabOS-AI/fabos-slm-dc-k8s"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"awxBranch"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"playbook"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install.yml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"clusterMemberTypes"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k8s_master"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"prettyName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Control-Plane Master"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"minNumber"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"scalable"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k8s_node"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"prettyName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Worker"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"minNumber"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"scalable"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"haproxy"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"prettyName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"External Proxy"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"minNumber"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"scalable"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"install-new-kubernetes-clusters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-new-kubernetes-clusters"}},[t._v("#")]),t._v(" Install new Kubernetes clusters")]),t._v(" "),e("p",[t._v("The Service Lifecycle Management provides an "),e("a",{attrs:{href:"https://github.com/FabOS-AI/fabos-slm-dc-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("official K8S deployment capability"),e("OutboundLink")],1),t._v(", which supports the installation of new clusters. At least 5 hosts are required to set up a new Kubernetes cluster.")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Go to the "),e("code",[t._v("Resource")]),t._v(" tab and press the "),e("code",[t._v("+")]),t._v(" button in the bottom right corner.\n"),e("img",{attrs:{src:"/img/figures/use/cluster-create-new-1.png",alt:"Add resource button"}})])]),t._v(" "),e("li",[e("p",[t._v("Select "),e("code",[t._v("ADD EXISTING")]),t._v(".\n"),e("img",{attrs:{src:"/img/figures/use/cluster-create-new-2.png",alt:"Create new resource"}})])]),t._v(" "),e("li",[e("p",[t._v("Select "),e("code",[t._v("Cluster")]),t._v(".\n"),e("img",{attrs:{src:"/img/figures/use/cluster-create-new-3.png",alt:"Add new cluster"}})])]),t._v(" "),e("li",[e("p",[t._v("Configure cluster")]),t._v(" "),e("ul",[e("li",[t._v("Select "),e("code",[t._v("Create Methode")]),t._v(" "),e("code",[t._v("Use existing resources")]),t._v(".")]),t._v(" "),e("li",[t._v("Select "),e("code",[t._v("Cluster Type")]),t._v(" "),e("code",[t._v("Kubernetes")]),t._v(".")]),t._v(" "),e("li",[t._v("Assign the hosts to the member types.")]),t._v(" "),e("li",[t._v("Press "),e("code",[t._v("CREATE")]),t._v(", and the automation to set up your Kubernetes cluster will be triggered. It will take a few minutes.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/figures/use/cluster-create-new-4.png",alt:"Cluster create dialog"}})])]),t._v(" "),e("li",[e("p",[t._v("After the automation has finished, your new Kubernetes cluster will be shown in the "),e("code",[t._v("Resources")]),t._v(" overview.\n"),e("img",{attrs:{src:"/img/figures/use/cluster-create-new-5.png",alt:"Result"}})])])]),t._v(" "),e("h2",{attrs:{id:"add-managed-clusters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-managed-clusters"}},[t._v("#")]),t._v(" Add managed clusters")]),t._v(" "),e("p",[t._v("Already existing clusters be added as managed clusters. To allow the addition of a managed cluster, a corresponding cluster deployment capability must be available. That deployment capability must have an "),e("code",[t._v("INSTALL")]),t._v(" action with the property "),e("code",[t._v("skipable: true")]),t._v(". Configuration parameters in the action, can be used to query information required for accessing the cluster.\n"),e("br"),e("br"),t._v("\nExample from the "),e("a",{attrs:{href:"https://github.com/FabOS-AI/fabos-slm-dc-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("official K8S deployment capability"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language-yaml:line-numbers extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    ...\n    "actions": {\n        ...\n        "INSTALL": {\n            "capabilityActionClass": "AwxCapabilityAction",\n            "capabilityActionType": "INSTALL",\n            "awxRepo": "https://github.com/FabOS-AI/fabos-slm-dc-k8s",\n            "awxBranch": "main",\n            "playbook": "install.yml",\n            "skipable": true,\n            "configParameters": [\n                {\n                "name": "kubeconfig",\n                "prettyName": "Kube Config",\n                "description": "...",\n                "secret": true,\n                "valueType": "FILE",\n                "requiredType": "SKIP"\n                },\n                {\n                "name": "namespace",\n                "prettyName": "Namespace",\n                "description": "...",\n                "secret": true,\n                "valueType": "STRING",\n                "requiredType": "SKIP"\n                }\n            ]\n        },\n        ...\n    },\n    ...\n}\n')])])]),e("h3",{attrs:{id:"kubernetes-clusters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-clusters"}},[t._v("#")]),t._v(" Kubernetes Clusters")]),t._v(" "),e("p",[t._v("The Service Lifecycle Management provides an "),e("a",{attrs:{href:"https://github.com/FabOS-AI/fabos-slm-dc-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("official K8S deployment capability"),e("OutboundLink")],1),t._v(", which supports managed clusters. It requires a "),e("a",{attrs:{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",target:"_blank",rel:"noopener noreferrer"}},[t._v("kubeconfig file"),e("OutboundLink")],1),t._v(" and a namespace in the cluster. The Service Lifecycle Management will deploy all services into this namespace.")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Go to the "),e("code",[t._v("Resource")]),t._v(" tab and press the "),e("code",[t._v("+")]),t._v(" button in the bottom right corner.\n"),e("img",{attrs:{src:"/img/figures/use/cluster-add-existing-1.png",alt:"Add resource button"}})])]),t._v(" "),e("li",[e("p",[t._v("Select "),e("code",[t._v("ADD EXISTING")]),t._v(".\n"),e("img",{attrs:{src:"/img/figures/use/cluster-add-existing-2.png",alt:"Add existing resource"}})])]),t._v(" "),e("li",[e("p",[t._v("Select "),e("code",[t._v("Cluster")]),t._v(".\n"),e("img",{attrs:{src:"/img/figures/use/cluster-add-existing-3.png",alt:"Add cluster"}})])]),t._v(" "),e("li",[e("p",[t._v("Add details of cluster")]),t._v(" "),e("ul",[e("li",[t._v("Select "),e("code",[t._v("Cluster Type")]),t._v(" "),e("code",[t._v("Kubernetes")]),t._v(".")]),t._v(" "),e("li",[t._v("Upload or paste the kubeconfig file of the Kubernetes cluster you want to add.")]),t._v(" "),e("li",[t._v("Enter the name of the namespace where the Service Lifecycle Management should deploy your services.")]),t._v(" "),e("li",[t._v("Press "),e("code",[t._v("ADD")]),t._v(", and your Kubernetes cluster will be added.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/figures/use/cluster-add-existing-4.png",alt:"Dialog to add cluster"}})])]),t._v(" "),e("li",[e("p",[t._v("Your Kubernetes cluster will be shown in the "),e("code",[t._v("Resources")]),t._v(" overview.\n"),e("img",{attrs:{src:"/img/figures/use/cluster-add-existing-5.png",alt:"Result"}})])])])])}),[],!1,null,null,null);e.default=n.exports}}]);