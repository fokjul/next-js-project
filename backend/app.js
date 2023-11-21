const { PrismaClient } = require('@prisma/client');

const express = require("express");
const server = express();

const cors = require('cors');
server.use(cors());

const prisma = new PrismaClient();

server.get("/posts", async (req, res) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
});

server.listen(8050, () => console.log("Server Running"));