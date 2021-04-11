import * as React from "react";
import { Icon, Result, Button } from "antd";

const Welcome: React.FC = (): React.ReactElement => {

  return (
    <Result
      icon={<Icon type="smile" theme="twoTone" />}
      title="Welcome to Github User Search Application, enter user to search!"
      status="info"
    />
  );
};

export default Welcome;
