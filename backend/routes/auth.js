const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const z = require("zod");

let authSchema;
let signupSchema;

module.exports = function(){
  const router = express.Router();

  //Signup Route
  router.post("/signup", async function(req, res) {
    //Fill out here for the signup controller
  });

  //Login Route
  router.post("/login", async function(req, res){
    //Fill out here for the login controller
  });
}
