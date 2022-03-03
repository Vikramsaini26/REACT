import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Input, Button } from "../styles/home";

function Home() {
  return (
    <div>
      <Container>
        <Input type="text" placeholder="Enter User Id" />

        <Input type="password" placeholder="Enter User Password" />
        <Button>
          <Link to="/dashboard"> Login </Link>
        </Button>
      </Container>
    </div>
  );
}

export default Home;
