import * as aws from "@pulumi/aws";
import * as eks from "@pulumi/eks";

const vpcId = "vpc-019b3e9275611f8e3"; // Replace with your VPC ID

const cluster = new eks.Cluster("my-eks-cluster", {
    vpcId: vpcId,
    subnetIds: ["subnet-0985674e7daaaecd1", "subnet-0ee99d3cdd63086b7"], // Replace with your subnet IDs
    instanceType: "t3.medium", // Replace with your desired instance type
    desiredCapacity: 2, // Replace with your desired capacity
    minSize: 1, // Replace with your minimum size
    maxSize: 5, // Replace with your maximum size
});

const bucket = new aws.s3.Bucket("my-bucket", {
    acl: "private",
    versioningEnabled: true,
});

export const kubeconfig = cluster.kubeconfig;
export const bucketName = bucket.id;

