import globals from "./globals.css";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className={globals.wrapper}>
      <Main/>
    </div>
  );
}
