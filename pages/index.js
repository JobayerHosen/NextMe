import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import meApi from "../services/me";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    meApi()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
        router.push("/login");
      });
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>{user && <UserCard user={user} />}</div>
    </>
  );
}
