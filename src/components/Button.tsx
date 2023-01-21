export interface ButtonProps {
  content?: string;
}

export default function Button() {
  return (
    <button className="border px-2 py-1 rounded-lg hover:bg-white hover:text-black transition-colors duration-200 ease-in-out-circ">
      Submit
    </button>
  );
}
