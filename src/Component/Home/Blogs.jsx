import React from 'react';
import Navbar from '../../SharedComponent/Navbar';

const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='mt-5 mb-5'>
                <h1 className="text-4xl font-bold mt-5 mb-5">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p className="text-xl text-gray-700 font-semibold">An access token is a credential that represents the authorization granted to a user, allowing them to access protected resources or perform specific actions.
                    A refresh token is a long-lived token used to obtain a new access token when the original one expires.
                    Access tokens are usually short-lived and stored on the client-side, typically in memory or in browser storage (e.g., local storage or session storage).
                    Refresh tokens, being long-lived and more sensitive, should be securely stored on the client-side, preferably in an HttpOnly secure cookie or another secure storage mechanism that protects them from client-side JavaScript access.</p>
            </div>
            <div className='mt-5 mb-5'>
                <h1 className="text-4xl font-bold mt-5 mb-5">
                    Compare SQL and NoSQL databases?
                </h1>
                <p className="text-xl text-gray-700 font-semibold">SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database systems with different data models and query languages:

                    SQL databases are based on the relational data model, use structured tables, and have a predefined schema. They use SQL for querying and have support for complex joins and transactions.
                    NoSQL databases are designed for unstructured or semi-structured data, and they don't follow a fixed schema. They can be document-based (e.g., MongoDB), key-value stores (e.g., Redis), columnar databases (e.g., Cassandra), or graph databases (e.g., Neo4j).
                    SQL databases provide strong consistency, ACID (Atomicity, Consistency, Isolation, Durability) transactions, and are suitable for complex relationships and structured data.
                    NoSQL databases offer flexibility, scalability, high performance, and are suitable for handling large amounts of unstructured data or scenarios that require high write throughput.</p>
            </div>
            <div className='mt-5 mb-5'>
                <h1 className="text-4xl font-bold mt-5 mb-5">
                    What is Express.js? What is Nest.js?
                </h1>
                <p className="text-xl text-gray-700 font-semibold">Express.js: Express.js is a popular, fast, and minimalist web application framework for Node.js. It simplifies the development of web applications and APIs by providing a set of features and middleware that handle routing, request/response handling, and more.

                    Nest.js: Nest.js is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides an opinionated structure and additional features inspired by Angular. Nest.js promotes the use of TypeScript and offers features like dependency injection, modules, decorators, and more to enhance the development experience.</p>
            </div>
            <div className='mt-5 mb-5'>
                <h1 className="text-4xl font-bold mt-5 mb-5">
                What is MongoDB aggregate and how does it work?
                </h1>
                <p className="text-xl text-gray-700 font-semibold">MongoDB's aggregate is a powerful aggregation framework that allows you to process and analyze data within the database. It offers various stages, operators, and expressions to perform complex data transformations and aggregations.
With the aggregate framework, you can perform operations like grouping, sorting, filtering, projecting, joining, and more on your data.
Aggregation pipelines are constructed using multiple stages, where each stage takes input from the previous stage and passes the transformed output to the next stage.
The stages in an aggregation pipeline can include $match (filtering), $group (grouping and aggregating data), $sort (sorting), $project (projecting fields), and many others.
Aggregation pipelines can be used for generating reports, performing analytics, data transformations, and other advanced data processing tasks in MongoDB.</p>
            </div>
        </div>
    );
};

export default Blogs; <Navbar></Navbar>