import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <header
        style={{
          minHeight: "100vh",
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url('/images/banner.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="text-box">
          <h1 style={{ fontFamily: "cursive", fontSize: "5rem" }}>La Recipes </h1>
          <p className="mt-3" style={{ fontSize: "2rem", fontWeight: "lighter" }}>
            Recipes for the meals we love
          </p>
          <Link href="/recipes" className="btn btn-outline btn-large btn-info">
            View Recipes<span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </header>
    </div>
  );
}
