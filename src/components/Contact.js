const Contact = () => {
  return (
    <div className="Contact m-auto">
      <h1 className="font-bold text-3xl text-center my-7">Contact US </h1>
      <div className="w-3/12 m-auto ">
        <form className=" flex flex-col">
          <input
            type="text"
            className="name  border-black  border-[1.5px] rounded p-1 my-1 "
            placeholder="Name "
          ></input>
          <input
            type="text"
            className="  border-[1.5px]  border-black  rounded  p-1 my-1"
            placeholder="message"
          ></input>
          <button className="border-[1.5px]  border-black rounded p-1 my-1 bg-gray-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
