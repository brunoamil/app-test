
type Props = {
  title: string;
};

export default function Home ( { title = 'Bruno' }) {
  return (
    <h2>{title}</h2>
  )
}
