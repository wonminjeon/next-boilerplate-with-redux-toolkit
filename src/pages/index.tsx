const add = (x: number, y: number): number => {
  return x + y;
};

const Index = () => {
  return (
    <div>
      <p>Hello Next.js {add(4, 5)}</p>
    </div>
  );
};

export default Index;
