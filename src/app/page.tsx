import Image from "next/image";
import { withBasePath } from "../../lib/imagePath";
import "../styles/pages/homepage.scss";

export default function Home() {
  return (
    <div className="page">
      <Image
        src={withBasePath("/next.svg")}
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol>
        <li>
          Get started by editing <code>src/app/page.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
