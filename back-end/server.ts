import express from "express";
const app = express();

const sidebaroptions = [
  {
    href_uri: "#",
    title: "Information about me",
    icon_uri: `https://www.svgrepo.com/show/530412/user.svg`,
    text_under_icon: "Sazzad",
  },
  {
    href_uri: "#",
    title: "My resume",
    icon_uri: `https://www.svgrepo.com/show/530404/document.svg`,
    text_under_icon: "resume",
  },
  {
    href_uri: "#",
    title: "My projects",
    icon_uri: `https://www.svgrepo.com/show/530400/browse.svg`,
    text_under_icon: "projects",
  },
  {
    href_uri: "#",
    title: "blog",
    icon_uri: `https://www.svgrepo.com/show/530397/date.svg`,
    text_under_icon: "blog",
  },
  {
    href_uri: "#",
    title: "contact",
    icon_uri: `https://www.svgrepo.com/show/530407/information.svg`,
    text_under_icon: "contact",
  },
];

const all_services: {
  logo: string;
  title: string;
  description: string;
}[] = [
  {
    description:
      "MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB — document database. Express(.js) — Node.js web framework. React(.js) — a client-side JavaScript framework. Node(.js) — the premier JavaScript web server.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
    title: "Wordpress",
  },
  {
    description:
      "MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB — document database. Express(.js) — Node.js web framework. React(.js) — a client-side JavaScript framework. Node(.js) — the premier JavaScript web server.",
    logo: "https://cdn.worldvectorlogo.com/logos/mern.svg",
    title: "mern",
  },
  {
    description:
      "MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB — document database. Express(.js) — Node.js web framework. React(.js) — a client-side JavaScript framework. Node(.js) — the premier JavaScript web server.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
    title: "Wordpress",
  },
  {
    description:
      "MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB — document database. Express(.js) — Node.js web framework. React(.js) — a client-side JavaScript framework. Node(.js) — the premier JavaScript web server.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
    title: "Wordpress",
  },
  {
    description:
      "MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB — document database. Express(.js) — Node.js web framework. React(.js) — a client-side JavaScript framework. Node(.js) — the premier JavaScript web server.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
    title: "Wordpress",
  },
];

app.get("/services", function (req, res) {
  res.send(all_services);
});

app.get("/", function (req, res) {
  res.send(sidebaroptions);
});

app.listen(3001);
