import { Suspense } from "react";
import ProfileCard from "../../components/Profile/ProfileCard";
import useUser from "../../hooks/useUser";

export default function Profile() {
  const { user } = useUser();

  return (
    <Suspense fallback={<div>🌀 Loading...</div>}>
      <ProfileCard {...user} />
    </Suspense>
  );
}
