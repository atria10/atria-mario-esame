import { User } from "@nextui-org/react";

const Avatar=({picture}) =>{
  return (
    <User
      src={picture}
    />
  );
}

export default Avatar;