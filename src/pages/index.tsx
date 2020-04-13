import Test from "../components/test";

const add = (x: number, y: number): number => {
  return x + y;
};

const Index = () => {
  return (
    <div>
      <p>
        <span className="text-white">Hello Next.js</span> <Test version={add(4, 5)} />
      </p>
    </div>
  );
};

export default Index;
