import Image from "next/image";
import React from "react";

const technologies = [
  {
    name: "Java",
    src: "https://www.vectorlogo.zone/logos/java/java-horizontal.svg",
  },
  {
    name: "AWS",
    src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg",
  },
  {
    name: "Apache Storm",
    src: "https://www.vectorlogo.zone/logos/apache_storm/apache_storm-ar21.svg",
  },
  {
    name: "Docker",
    src: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
  },
  {
    name: "TensorFlow",
    src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg",
  },
  {
    name: "Node.js",
    src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg",
  },
  {
    name: "Oracle",
    src: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg",
  },
  { name: "JMeter", src: "https://jmeter.apache.org/images/jmeter_square.svg" }, // JMeter's logo from the official site
  {
    name: "MongoDB",
    src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
  },
  {
    name: "MySQL",
    src: "https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg",
  },
  {
    name: "Neo4j",
    src: "https://www.vectorlogo.zone/logos/neo4j/neo4j-ar21.svg",
  },
  {
    name: "Apache Spark",
    src: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg",
  },
  {
    name: "Python",
    src: "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
  },
  {
    name: "Kibana",
    src: "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-ar21.svg",
  },
  {
    name: "Firebase",
    src: "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg",
  },
  {
    name: "Cloudera",
    src: "https://www.vectorlogo.zone/logos/cloudera/cloudera-ar21.svg",
  },
  {
    name: "GraphQL",
    src: "https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg",
  },
  {
    name: "Kubernetes",
    src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg",
  },
];

const Technologies = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-10 md:px-20 lg:px-32 font-poppins">
      <h2 className=" text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-16">
        Tools & Technologies We Use
      </h2>
      <div className="w-[85%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              height={120}
              width={120}
              src={tech.src}
              alt={tech.name}
              className="h-14 object-contain"
              title={tech.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
