const FormattedPrice = ({ amount }) => {
    const formattedAmount = parseFloat(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    
    return <span>{formattedAmount}</span>;
  };
  
  export default FormattedPrice;
  