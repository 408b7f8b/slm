(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{354:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"clusters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clusters"}},[t._v("#")]),t._v(" Clusters")]),t._v(" "),s("p",[t._v("The Service Lifecycle Management enables the "),s("a",{attrs:{href:"#install-new-clusters"}},[t._v("installation of new clusters")]),t._v(" and the integration of "),s("a",{attrs:{href:"#add-managed-clusters"}},[t._v("existing clusters (managed clusters)")]),t._v(". To deploy a service offering into a cluster, the corresponding deployment capability must have the deployment type of the service offering defined in the property "),s("code",[t._v("supportedDeploymentTypes")]),t._v("(see section "),s("RouterLink",{attrs:{to:"/docs/usage/capabilities/#deployment-capabilities"}},[t._v("Deployment Capabilites")]),t._v(" for details).")],1),t._v(" "),s("h2",{attrs:{id:"install-new-clusters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-new-clusters"}},[t._v("#")]),t._v(" Install new clusters")]),t._v(" "),s("p",[t._v("A corresponding cluster deployment capability must be available to allow the installation of a new cluster. That deployment capability must have an "),s("code",[t._v("INSTALL")]),t._v(" action and a definition for "),s("code",[t._v("clusterMemberTypes")]),t._v(".\n"),s("br"),s("br"),t._v("\nExample from the "),s("a",{attrs:{href:"https://github.com/eclipse-slm/slm-dc-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("official K8S deployment capability"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"actions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"INSTALL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"capabilityActionClass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AwxCapabilityAction"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"capabilityActionType"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INSTALL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"awxRepo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/eclipse-slm/slm-dc-k8s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"awxBranch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"playbook"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install.yml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"clusterMemberTypes"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k8s_master"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"prettyName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Control-Plane Master"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"minNumber"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"scalable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k8s_node"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"prettyName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Worker"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"minNumber"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"scalable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"haproxy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"prettyName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"External Proxy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"minNumber"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"scalable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"install-new-kubernetes-clusters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-new-kubernetes-clusters"}},[t._v("#")]),t._v(" Install new Kubernetes clusters")]),t._v(" "),s("p",[t._v("The Service Lifecycle Management provides an "),s("a",{attrs:{href:"https://github.com/eclipse-slm/slm-dc-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("official K8S deployment capability"),s("OutboundLink")],1),t._v(", which supports the installation of new clusters. At least 5 hosts are required to set up a new Kubernetes cluster.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Go to the "),s("code",[t._v("Resource")]),t._v(" tab and press the "),s("code",[t._v("+")]),t._v(" button in the bottom right corner.\n"),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-create-new-1.png")}})])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("code",[t._v("ADD EXISTING")]),t._v(".\n"),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-create-new-2.png")}})])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("code",[t._v("Cluster")]),t._v(".\n"),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-create-new-3.png")}})])]),t._v(" "),s("li",[s("p",[t._v("Configure cluster")]),t._v(" "),s("ul",[s("li",[t._v("Select "),s("code",[t._v("Create Methode")]),t._v(" "),s("code",[t._v("Use existing resources")]),t._v(".")]),t._v(" "),s("li",[t._v("Select "),s("code",[t._v("Cluster Type")]),t._v(" "),s("code",[t._v("Kubernetes")]),t._v(".")]),t._v(" "),s("li",[t._v("Assign the hosts to the member types.")]),t._v(" "),s("li",[t._v("Press "),s("code",[t._v("CREATE")]),t._v(", and the automation to set up your Kubernetes cluster will be triggered. It will take a few minutes.")])])])]),t._v(" "),s("p",[t._v("<img :src='/img/figures/use/cluster-create-new-4.png')\">")]),t._v(" "),s("ul",[s("li",[t._v("After the automation has finished, your new Kubernetes cluster will be shown in the "),s("code",[t._v("Resources")]),t._v(" overview.\n"),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-create-new-5.png")}})])]),t._v(" "),s("h2",{attrs:{id:"add-managed-clusters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-managed-clusters"}},[t._v("#")]),t._v(" Add managed clusters")]),t._v(" "),s("p",[t._v("Already existing clusters be added as managed clusters. To allow the addition of a managed cluster, a corresponding cluster deployment capability must be available. That deployment capability must have an "),s("code",[t._v("INSTALL")]),t._v(" action with the property "),s("code",[t._v("skipable: true")]),t._v(". Configuration parameters in the action, can be used to query information required for accessing the cluster.\n"),s("br"),s("br"),t._v("\nExample from the "),s("a",{attrs:{href:"https://github.com/eclipse-slm/slm-dc-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("official K8S deployment capability"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"actions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"INSTALL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"capabilityActionClass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AwxCapabilityAction"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"capabilityActionType"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INSTALL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"awxRepo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/eclipse-slm/slm-dc-k8s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"awxBranch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"playbook"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install.yml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"skipable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"configParameters"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kubeconfig"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"prettyName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kube Config"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"secret"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"valueType"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FILE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"requiredType"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SKIP"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"namespace"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"prettyName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Namespace"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"secret"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"valueType"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"requiredType"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SKIP"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"kubernetes-clusters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-clusters"}},[t._v("#")]),t._v(" Kubernetes Clusters")]),t._v(" "),s("p",[t._v("The Service Lifecycle Management provides an "),s("a",{attrs:{href:"https://github.com/eclipse-slm/slm-dc-k8s",target:"_blank",rel:"noopener noreferrer"}},[t._v("official K8S deployment capability"),s("OutboundLink")],1),t._v(", which supports managed clusters. It requires a "),s("a",{attrs:{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",target:"_blank",rel:"noopener noreferrer"}},[t._v("kubeconfig file"),s("OutboundLink")],1),t._v(" and a namespace in the cluster. The Service Lifecycle Management will deploy all services into this namespace.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Go to the "),s("code",[t._v("Resource")]),t._v(" tab and press the "),s("code",[t._v("+")]),t._v(" button in the bottom right corner.\n"),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-add-existing-1.png")}})])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("code",[t._v("ADD EXISTING")]),t._v(".\n"),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-add-existing-2.png")}})])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("code",[t._v("Cluster")]),t._v(".\n"),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-add-existing-3.png")}})])]),t._v(" "),s("li",[s("p",[t._v("Add details of cluster")]),t._v(" "),s("ul",[s("li",[t._v("Select "),s("code",[t._v("Cluster Type")]),t._v(" "),s("code",[t._v("Kubernetes")]),t._v(".")]),t._v(" "),s("li",[t._v("Upload or paste the kubeconfig file of the Kubernetes cluster you want to add.")]),t._v(" "),s("li",[t._v("Enter the name of the namespace where the Service Lifecycle Management should deploy your services.")]),t._v(" "),s("li",[t._v("Press "),s("code",[t._v("ADD")]),t._v(", and your Kubernetes cluster will be added.")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-add-existing-4.png")}})]),t._v(" "),s("li",[s("p",[t._v("Your Kubernetes cluster will be shown in the "),s("code",[t._v("Resources")]),t._v(" overview.\n"),s("img",{attrs:{src:t.$withBase("/img/figures/use/cluster-add-existing-5.png")}})])])])])}),[],!1,null,null,null);s.default=n.exports}}]);