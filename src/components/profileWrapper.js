import Link from "next/link";

const ProfileWrapper = ({ user, children }) => {
  return (
    <Link
      href={{
        pathname: `/${user.username}`,
        query: {
          user: JSON.stringify(user),
        },
      }}
    >
      <a className="hover:border-0">{children}</a>
    </Link>
  );
};

export default ProfileWrapper;
