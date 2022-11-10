import React from "react";
import Accordion from "react-bootstrap/Accordion";
import UseTitle from "../hook/UseTitle";

const Blog = () => {
  UseTitle("Blog");
  return (
    <div className="w-50 mx-auto">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and No SQL</Accordion.Header>
          <Accordion.Body>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is JWT and how dose it work</Accordion.Header>
          <Accordion.Body>
            JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted. A JWT is a string made up of three parts,
            separated by dots (.), and serialized using base64. In the most
            common serialization format, compact serialization, the JWT looks
            something like this: xxxxx.yyyyy.zzzzz.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the Difference between javascript and nodeJs{" "}
          </Accordion.Header>
          <Accordion.Body>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            how does nodeJs handle multiple requests at the same time
          </Accordion.Header>
          <Accordion.Body>
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
