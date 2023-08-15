import { Button, Name } from "../components";

export default function HomePage() {
  return (
    <main>
      <p>This is home page</p>
      <Name name="some name" />
      <Button name="Some Button" />
    </main>
  );
}
