import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <h1>Hello, World</h1>

      <Link href="/sign-in">Sign in</Link>
    </>
  );
}
