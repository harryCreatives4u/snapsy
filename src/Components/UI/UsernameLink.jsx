import React from "react";

import { Link } from "react-router-dom";

const UsernameLink = (props) => {
  return (
    <Link to={`/profile/${props.userId}`} className="my-auto username">
      {props.children}
    </Link>
  );
};

export default UsernameLink;
