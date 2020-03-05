import React, { Component } from "react";

import Link from "next/link";

class Sell extends Component {
  render() {
    return (
      <div>
        Sell
        <p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </div>
    );
  }
}

export default Sell;
