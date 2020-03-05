import React, { Component } from "react";

import Link from "next/link";

class Home extends Component {
  render() {
    return (
      <div>
        Hey!
        <p>
          <Link href="/sell">
            <a>Sell</a>
          </Link>
        </p>
      </div>
    );
  }
}

export default Home;
