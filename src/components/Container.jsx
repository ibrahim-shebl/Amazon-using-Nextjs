 

const Container = ({ children, className }) => {
  return (
    <div
      className= "py-10 max-w-screen-xl mx-auto px-4 xl:px-0" 
    >
      {children}
    </div>
  );
};

export default Container;
