"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  console.log(data, status)

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          Welcome back to DextrLabs blog.
        </div>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
