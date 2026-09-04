import { PROFILE } from "../data";

export default function Footer() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer>
      Built by <a href="#">{PROFILE.name}</a> · Last updated: {today}
    </footer>
  );
}
